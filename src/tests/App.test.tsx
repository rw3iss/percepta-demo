import 'jsdom-global/register';
import { configure, mount } from 'enzyme';
import { h } from 'preact';
import Adapter from 'enzyme-adapter-preact-pure';
import MovieService from '../app/services/MovieService';
import Home from '../app/components/pages/Home';

configure({ adapter: new Adapter });

jest.mock('isomorphic-fetch');

jest.mock('../app/services/MovieService', () => require('./__mocks__/MovieService'));

describe('Test the Home component search functionality', () => {


    beforeEach(() => {
        jest.mock('../app/services/MovieService')
    })

    it('certify http call is made (mocked)', (done) => {
        let ms = new MovieService();

        ms.searchMovies('test')
            .then(r => {
                expect(r.Response).toBe("True");
                expect(r.Search).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            Title: 'Beta Test'
                        })
                    ])
                );

                done();
            })
            .catch(e => {
                console.log('Error', e)
                throw e;
            });
    });

    it('search button searches and changed state', () => {
        const comp = mount(<Home />);

        const input = comp.find('#search-input');
        input.getDOMNode().value = 'test';
        input.simulate('change');
        comp.update();

        expect(comp.state().query).toBe('test');
    });

    it('verify movie data is printed to the dom', async (done) => {
        //const waitForPromises = () => new Promise(setImmediate);
        const comp = mount(<Home />);

        const input = comp.find('#search-input');
        input.getDOMNode().value = 'test';
        input.simulate('change');

        const button = comp.find('#btn-search').at(1);
        button.simulate('click');
        comp.update();

        setTimeout(() => {
            comp.update();

            expect(comp.state().searchResults.length).toBeGreaterThan(0);
            expect(comp.contains('Beta Test')).toEqual(true);

            done();
        }, 2000);

    });

});
