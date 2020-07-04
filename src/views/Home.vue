<template>
  <div align="center">
    <div class="search-wrapper">
     <!--  <b-form-select :value="selected" v-model="selected" :options="options"></b-form-select>
      <p>{{options}}</p>
      <p>{{items[0].albumId}}</p> -->
      <input type="text" @change="getSearch" v-model="search" placeholder="Search title.."/>
      <pre>{{search}}</pre>
      <p>{{allDisplay}}</p>
    </div>
    <b-row>
      <b-card class="m-3" style="width: 20rem;" v-for="item in items" :key="item.id">
        <b-row>
          <b-col>
            <img v-bind:src="item.thumbnailUrl">
          </b-col>
          <b-col>
            <b-card-text class="ml-2">{{item.title}}</b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
    <!-- <b-row v-if="filterByText">
      <b-card class="m-3" style="width: 20rem;" v-for="item in items" :options="options" :key="item.id">
        <b-row>
          <b-col>
            <img v-bind:src="item.thumbnailUrl">
          </b-col>
          <b-col>
            <b-card-text class="ml-2">{{list}}</b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </b-row> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('home/getPhotos')
    this.filterByText()
  },
  data: () => ({
    item: '',
    search: null,
    list: [],
    allDisplay: [],
    selected: [],
    options: []
  }),
  computed: mapState({
    items: (state) => state.home.photos
  }),
  methods: {
    async filterByText () {
      await this.$store.dispatch('home/filterByText')
      this.list = this.$store.state.home.title
    },
    getSearch () {
      console.log(this.display)
      return this.list.filter((item) => this.allDisplay.push(item.includes(this.search)))
      for (let i = 0; i <= this.allDisplay.length; i++) {
        if (true) {
          return this.list[i]
        }
      }
    }
  }
}
</script>
