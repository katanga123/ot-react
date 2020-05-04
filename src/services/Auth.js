import Cookie from 'universal-cookie'

const cookie = new Cookie()
const expiredAt = 60 * 24;


class Auth {
    login(response, cb) {

        const token = response.success.token

        let date = new Date();
        date.setTime(date.getTime() + (expiredAt * 60 * 1000))
        const options = { path: '/', expires: date }

        cookie.set('access_token', token, options)

        // callback
        cb();
    }

    logout(cb) {
        cookie.remove('access_token')

        // callback
        cb();
    }
}
export default new Auth();