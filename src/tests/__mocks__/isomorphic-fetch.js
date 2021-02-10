const isoFetch = jest.requireActual('isomorphic-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
    fetch: isoFetch
});

fetchMock.config.fallbackToNetwork = true;
fetchMock.config.overwriteRoutes = false;

module.exports = fetchMock;