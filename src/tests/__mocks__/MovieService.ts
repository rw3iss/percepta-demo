export default jest.fn().mockImplementation(() => {
    return {
        searchMovies: function (query: string): Promise<any> {
            return new Promise((resolve, reject) => {
                return resolve({
                    Response: "True",
                    Search: [
                        { Title: 'Beta Test' },
                        { Title: 'Some Other Movie' }
                    ]
                });
            })
        }
    }
})