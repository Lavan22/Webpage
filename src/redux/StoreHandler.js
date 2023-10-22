import User_Handler from '../Handlers/Users/User'
import Company_Handler from '../Handlers/Company/Company'
import Projects_Handler from '../Handlers/Projects/Projects'
import Estimation_Handler from '../Handlers/Projects/Estimate'


class StoreHandler {

    constructor({ dataStack, dispatch, updateState }) {

        this.dataStack = dataStack || []
        this.dispatch = dispatch
        this.updateState = updateState

        this.user_Handler = new User_Handler()
        this.company_Handler = new Company_Handler()
        this.projects_Handler = new Projects_Handler()
        this.estimation_Handler = new Estimation_Handler()

        // this.init()
    }

    async init() {

        return new Promise((resolve, reject) => {


            this.dataStack.forEach(async (item, i) => {

                if (item == 'user') return resolve(await this.loadUserData())
                else if (item == 'company') return resolve(await this.loadCompanyData())
                else if (item == 'projects') return resolve(await this.loadProjectsData())

            })

        })


    }

    async loadUserData() {

        let userdetials = JSON.parse(localStorage.getItem("userdetials"))

        let response = await this.user_Handler.getProfileHandler({ user_id: userdetials.id })

        if (response && response.success) {

            this.dispatch(this.updateState({
                type: "SET_USER",
                payload: { user: response.data }
            }))

        }

        return true
    }
    async loadCompanyData() {

        let userdetials = JSON.parse(localStorage.getItem("userdetials"))

        let response = await this.company_Handler.getCompanyHandler({
            user_id: userdetials.id,
            company_id: userdetials.company_id
        })


        if (response && response.success) {

            this.dispatch(this.updateState({
                type: "SET_USER",
                payload: { company: response.data }
            }))
        }
        return true
    }
    async loadProjectsData() {

        let userdetials = JSON.parse(localStorage.getItem("userdetials"))

        let response = await this.projects_Handler.getProjectsHandler({
            company_id: userdetials.company_id,
            user_id: userdetials.id,
        })

        if (response.success) {

            this.dispatch(this.updateState({
                type: "SET_PROJECTS",
                payload: { projects: response.data || [] }
            }))


        }
        else {
        }

        return true
    }
}

export default StoreHandler;