function validateRequest(obj) {

    let validMethod = false;
    let validURL = false;
    let validVersion = false;
    let validMessage = false;

    let urlPattern = /^(\*|[A-Za-z0-9.]+)$/g;
    let messagePattern = /^[^<>\\&'"]+$/g;

    (function () {
        if (obj.hasOwnProperty('method') && (obj.method === 'GET' || 
            obj.method === 'POST' ||
            obj.method === 'DELETE' ||
            obj.method === 'CONNECT')) {
                validMethod = true;
            }
        if (!validMethod) {
            throw new Error('Invalid request header: Invalid Method')
        }
    })();

    (function () {
        if (obj.hasOwnProperty('uri') && (urlPattern.test(obj.uri) && obj.uri !== '')) {
            validURL = true;
        }
        if (!validURL) {
            throw new Error('Invalid request header: Invalid URI')
        }
    })();

    (function () {
        if (obj.hasOwnProperty('version') && (obj.version === 'HTTP/0.9' ||
            obj.version === 'HTTP/1.0' || 
            obj.version === 'HTTP/1.1' ||
            obj.version === 'HTTP/2.0')) {
                validVersion = true;
            }
        if (!validVersion) {
            throw new Error('Invalid request header: Invalid Version')
        }
    })();   

    (function () {
        if (obj.hasOwnProperty('message') && (messagePattern.test(obj.message)) || obj.message === '') {
            validMessage = true;
        }
        if (!validMessage) {
            throw new Error('Invalid request header: Invalid Message')
        }
    })();

    return obj;
}
(validateRequest({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}))