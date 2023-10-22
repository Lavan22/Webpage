
import proxyConfig from '../../config/reverseProxy'
import HeaderConfig from '../../config/header'

class Authentication {

    constructor() {

    }

    async signup(params) {

        let { username, phone, email, password } = params

        try {

            let response = await fetch(proxyConfig['proxyUrl'] + '/resturant/auth/signup', {
                method: 'POST',
                headers: HeaderConfig.getHeader({ method: 'POST', isToken: false }),
                body: JSON.stringify(
                    { username, phone, email, password }
                )
            })

            response = await response.json()

            if (response) return response
        } catch {
            return { success: false }
        }


    }
    async signin(params) {

        let { email, location, password } = params

        try {

            let response = await fetch(proxyConfig['proxyUrl'] + '/resturant/auth/signin', {
                method: 'POST',
                headers: HeaderConfig.getHeader({ method: 'POST', isToken: false }),
                body: JSON.stringify({
                    password, location, email
                })
            })

            response = await response.json()

            if (response) return response
        } catch {
            return { success: false }
        }


    }
    async forgetPassword(params) {

        let { email } = params

        try {

            let response = await fetch(proxyConfig['proxyUrl'] + '/resturant/auth/forgot-password', {
                method: 'POST',
                headers: HeaderConfig.getHeader({ method: 'POST', isToken: false }),
                body: JSON.stringify({
                    email
                })
            })

            response = await response.json()

            if (response) return response
        } catch {
            return { success: false }
        }


    }
    async verifyResetCode(params) {

        let { code, email } = params

        try {

            let response = await fetch(proxyConfig['proxyUrl'] + '/resturant/auth/veify-reset-password', {
                method: 'POST',
                headers: HeaderConfig.getHeader({ method: 'POST', isToken: false }),
                body: JSON.stringify({
                    code, email
                })
            })

            response = await response.json()

            if (response) return response
        } catch {
            return { success: false }
        }


    }
    async resendResetCode(params) {

        let { email } = params

        try {

            let response = await fetch(proxyConfig['proxyUrl'] + '/resturant/auth/resend-reset-code', {
                method: 'POST',
                headers: HeaderConfig.getHeader({ method: 'POST', isToken: false }),
                body: JSON.stringify({
                    email
                })
            })

            response = await response.json()

            if (response) return response
        } catch {
            return { success: false }
        }



    }
    async resetPassword(params) {

        let { code, email, password } = params

        try {

            let response = await fetch(proxyConfig['proxyUrl'] + '/resturant/auth/reset-password', {
                method: 'POST',
                headers: HeaderConfig.getHeader({ method: 'POST', isToken: false }),
                body: JSON.stringify({
                    code, email, password
                })
            })

            response = await response.json()

            if (response) return response
        } catch {
            return { success: false }
        }


    }

}

export default Authentication;