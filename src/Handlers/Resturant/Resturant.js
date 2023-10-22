
import proxyConfig from '../../config/reverseProxy'
import HeaderConfig from '../../config/header'

class Resturant {

    constructor() {

    }

    async getProfileHandler() {

        try {

            let response = await fetch(proxyConfig['proxyUrl'] + '/resturant/get-profile', {
                method: 'POST',
                headers: HeaderConfig.getHeader({ method: 'POST', isToken: true }),
            })

            response = await response.json()

            if (response) return response
        } catch {
            return { success: false }
        }


    }


}

export default Resturant;