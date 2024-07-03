import { defineStore } from 'pinia'

const useBalladStore = defineStore('ballad', {
  state: () => {
    return {
      isScreen: false as boolean
    }
  },
  getters: {
    getSsScreen: state => {
      return state.isScreen
    }
  },
  actions: {
    cutLayout() {
      this.isScreen = !this.isScreen
    }
  },
  persist: true
})

export default useBalladStore