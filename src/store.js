import {defineStore} from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    isLoggedIn: false
  }),
  actions: {
    setUser(user){
      this.user = user
      this.isLoggedIn = !!user
    },
    async login(credentials){
      try {
        const response = await axios.post('/api/login', credentials)
        const user = response.data.user
        const token = response.data.token

        this.setUser(user)

        localStorage.setItem('token',  token)

        axios.defaults.headers.common['Authorization'] = `
          Bearer ${token}
        `
      } catch (error) {
        console.error(error)
      }
    },
    logout(){
      this.setUser(null)

      localStorage.removeItem('token')

      delete axios.defaults.headers.common['Authorization']
    }
  }
})