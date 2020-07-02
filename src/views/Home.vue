<template>
  <div align="center">
    <div class="search-wrapper">
      <b-form-select :value="selected" v-model="selected" :options="options"></b-form-select>
      <p>{{options}}</p>
      <p>{{items[0].albumId}}</p>
      <input type="text" v-model="search" placeholder="Search title.."/>
     <model-select :options="options"
        v-model="item"
        placeholder="select item">
      </model-select>
    </div>
    <b-row v-if="!selected">
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
    <b-row v-if="selected">
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
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ModelSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'

export default {
  name: 'Home',
  created () {
    this.photos()
  },
  data: () => ({
    item: '',
    search: '',
    list: [],
    selected: null,
    options: []
  }),
  computed: mapState({
    items: (state) => state.home.photos
  }),
  methods: {
    photos () {
      this.$store.dispatch('home/getPhotos')
    }
  },
  components: {
    ModelSelect
  }
}
</script>
