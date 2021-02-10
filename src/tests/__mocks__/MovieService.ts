// module.exports = {
//     searchMovies: function(query: string) {
//         console.log('mock search', query);
//         return [];
//     }
// }


//export const mockService = jest.fn();
//const mock = jest.fn().mockImplementation(() => {
export default class MovieService {
    constructor() {
        console.log('mock service')
    }

    searchMovies(query: string) {
        console.log('mock search', query);
        return new Promise((resolve, reject) => {
            resolve({
                "Response": "True",
                "Search": [
                    { Title: 'Beta Test' },
                    { Title: 'Some Other Movie' }
                ]
            });
        })
    }
}

//});
