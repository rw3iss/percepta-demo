import HttpClient from '../lib/HttpClient';

const config = require('../config.json');
const API_KEY = config.omdbApiKey;

export default class MovieService extends HttpClient {

    searchMovies(query: string, filter: Filter) { //director: string, year: string) {
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
        return this.externalRequest(url);
    }

}
