import { createStore } from 'vuex'
import userinfo from './userinfo'
import login from './login'
import chatlist from './chatlist'
import homepage from './homepage'
import setloc from './setloc'
import viewpost from './viewpost'




export default createStore({
  modules: {
    userinfo,
    login,
    homepage,
    chatlist,
    setloc,
    viewpost,

  },
})