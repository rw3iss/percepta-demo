import 'jsdom-global/register';
import { configure, mount } from 'enzyme';
import { h } from 'preact';
import App from '../src/components/App';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter });

describe('App', () => {
    it('should display the SiteHeader with app logo', () => {
        const app = mount(<App />);
        
        const logo = 'Percepta';

        expect(app.contains(logo)).toEqual(true);
    });

    it('should click the button', () => {
        const app = mount(<App />);

        const formText = 'Search for a movie:';

        app.find('.button').simulate('click');

        expect(app.contains(formText)).toEqual(true);
    });
});