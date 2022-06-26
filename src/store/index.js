import Vue from 'vue'
import Vuex from 'vuex'
import Categories from '@/store/modules/categories-module'
import Blogs from '@/store/modules/blogs-module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Categories,
    Blogs,
  }
})
