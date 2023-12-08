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
        const response = await axios.post('https://xpresspro-core.onrender.com/login', {user: credentials});

        const user = response.data.user;
        const token = response.data.token;

        this.setUser(user)

        localStorage.setItem('token',  token)
        localStorage.setItem('user', JSON.stringify(user))

        axios.defaults.headers.common['Authorization'] = `
          Bearer ${token}
        `

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async register(credentials){
      try {
        const response = await axios.post('https://xpresspro-core.onrender.com/users', {user: credentials});
        return true;
      } catch (error) {
        return false;
      }
    },
    logout(){
      this.setUser(null)

      localStorage.removeItem('token')
      localStorage.removeItem('user')

      delete axios.defaults.headers.common['Authorization']
    }
  }
})