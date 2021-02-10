import 'jsdom-global/register';
import { configure, mount } from 'enzyme';
import { h } from 'preact';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter });
