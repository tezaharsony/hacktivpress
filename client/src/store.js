import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index'

vue.use(Vuex)

export default new.Vuex.Store({
  state: {
    Login[]
  },
  mutation: {
    Login (state, payload) {
    state.Login = payload
    }
  },
  action: {
    Login (store,payload) {
      axios.post('http://localhost:3000/api/login', {
        name: payload.name,
        password: payload.password
      })
      .then(response => {
        if (response.data !== 'please type your correct password') {
          store.commit('Login', response.data)
          localStorage.setItem('token', response.data)
          router.push('/')
        } else {
          alert (response.data)
        }
      })
    }
  }
})
