import 'jsdom-global/register';
import { configure, mount } from 'enzyme';
import { h } from 'preact';
import App from '../app/components/App';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter });

describe('App', () => {
    it('should display the SiteHeader with app logo', () => {
        const app = mount(<App />);
        
        const logo = 'Percepta';

        expect(app.contains(logo)).toEqual(true);
    });
});