import 'jsdom-global/register';
import { configure, mount } from 'enzyme';
import { h } from 'preact';
import Adapter from 'enzyme-adapter-preact-pure';
import MovieService from '../app/services/MovieService';
import Home from '../app/components/pages/Home';

configure({ adapter: new Adapter });

jest.mock('isomorphic-fetch');

let ms = new MovieService();

// jest.mock('../app/services/MovieService', () => {
//     return {
//         searchMovies: function(query: string) {
//             console.log('mock search', query);

//             // return new Promise((resolve, reject) => {
//             //     resolve({
//             //         "Response": "True",
//             //         "Search": [
//             //             { Title: 'Beta Test' },
//             //             { Title: 'Some Other Movie' }
//             //         ]
//             //     });
//             // })
//         }
//     }
// });


// , () => {
//     return jest.fn().mockImplementation(() => {
//         return {
//             searchMovies: function (query: string) {
//                 console.log('mock search', query);
//                 return [];
//             }
//         }
//     });
// });

describe('Test the Home component search functionality', () => {

    it('certify http call is made', (done) => {
        //let ms = new MovieService();

        ms.searchMovies('test')
            .then(r => {
                expect(r.Response).toBe("True");
                expect(r.Search.length).toBe(10);
                done();
            })
            .catch(e => {
                console.log('Error', e)
                throw e;
            });

    });

    it('search button searches', () => {
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

            expect(comp.find('.result').length).toBe(10);

            done();
        }, 2000);

    });

});
