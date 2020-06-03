import CookieService from './CookieService'
let apiDomain = ''

if (process.env.NODE_ENV === 'production') {
    apiDomain = 'https://online-test.com/';
} else {
    apiDomain = 'http://127.0.0.1:8000/';
}

class UrlService {

    static configAccept() {
        return {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + CookieService.get('access_token')
            }
        }
    }

    static configContentType() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + CookieService.get('access_token')
            }
        }
    }

    // Auth
    static loginUrl() { return apiDomain + 'api/v1/login' }
    static registerUrl() { return apiDomain + 'api/v1/register' }
    static getUser() { return apiDomain + 'api/v1/user' }

    // Subject
    static subjectUrl() { return apiDomain + 'api/v1/subject' }



}

export default UrlService