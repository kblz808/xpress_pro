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
        // console.log(response.token);
        const user = response.data.user;
        const token = response.data.token;

        console.log( token);

        // console.log(token);

        // this.setUser(user)

        // localStorage.setItem('token',  token)

        // axios.defaults.headers.common['Authorization'] = `
          // Bearer ${token}
        // `
      } catch (error) {
        console.error(error)
      }
    },
    async register(credentials){
      const response = await axios.post('https://xpresspro-core.onrender.com/users', {user: credentials});
      console.log(response);
    },
    logout(){
      this.setUser(null)

      localStorage.removeItem('token')

      delete axios.defaults.headers.common['Authorization']
    }
  }
})