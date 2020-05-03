let apiDomain = ''

if (process.env.NODE_ENV === 'production') {
    apiDomain = 'https://online-test.com/';
} else {
    apiDomain = 'http://127.0.0.1:8000/';
}

class UrlService {

    static loginUrl() { return apiDomain + 'api/v1/login' }
    static registerUrl() { return apiDomain + 'api/v1/register' }

}

export default UrlService