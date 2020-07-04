import axios from 'axios'

export default {
  namespaced: true,
  state: {
    photos: null,
    title: null
  },
  mutations: {
    setPhotos: (state, payload) => {
      state.photos = payload
    },
    setTitle: (state, payload) => {
      state.title = payload
    }
  },
  actions: {
    async getPhotos (context) {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
        context.commit('setPhotos', result.data)
      } catch (err) {
        console.log(err)
      }
    },
    async filterByText (context, text) {
      try {
        console.log('vmi')
        const title = []
        const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
        result.data.filter((item) => title.push(item.title))
        context.commit('setTitle', title)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
