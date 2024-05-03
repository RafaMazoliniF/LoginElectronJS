const httpMocks = require('node-mocks-http');
const router = require('./routs');

const fetchDataBase = async () => {
    // Creating a simulated request object
    const req = httpMocks.createRequest({
        method: 'GET',
        url: '/data', // Use the correct route '/data'
    });

    // Creating a simulated response object
    const res = httpMocks.createResponse();

    try {
        // Calling the router handler directly
        await router.handle(req, res);

        // Getting the response data
        const responseData = res._getJSON();
        return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

module.exports = {
    fetchDataBase: fetchDataBase
};
