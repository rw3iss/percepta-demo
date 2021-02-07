import 'jsdom-global/register';
import { configure, mount } from 'enzyme';
import { h } from 'preact';
import Adapter from 'enzyme-adapter-preact-pure';
import App from '../app/components/App';

configure({ adapter: new Adapter });

describe('App', () => {
});