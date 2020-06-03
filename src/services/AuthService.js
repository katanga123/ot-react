import CookieService from './CookieService'

const expiredAt = 60 * 24;


class AuthService {
    login(response, cb) {

        const token = response.success.token

        let date = new Date();
        date.setTime(date.getTime() + (expiredAt * 60 * 1000))
        const options = { path: '/', expires: date }

        CookieService.set('access_token', token, options)

        // callback
        cb();
    }



    logout(cb) {
        CookieService.remove('access_token')

        // callback
        cb();
    }
}
export default new AuthService();