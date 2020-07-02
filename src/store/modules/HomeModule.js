import axios from 'axios'

export default {
  namespaced: true,
  state: {
    photos: null
  },
  mutations: {
    setPhotos: (state, payload) => {
      state.photos = payload
    }
  },
  actions: {
    async getPhotos (context) {
      const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
      context.commit('setPhotos', result.data)
    }
  }
}
