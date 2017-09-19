<template>
  <div>
    <v-tabs dark v-model="active">
      <v-tabs-bar class="transparent">
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple
        >
          Item {{ tab.slice(-1) }}
        </v-tabs-item>
        <v-tabs-slider class="purple"></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content
          v-for="tab in tabs"
          :key="tab"
          :id="tab"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>

export default {
  name: 'page-four',
  components: {
  },
  data () {
    return {
      tabs: ['tab-1', 'tab-2', 'tab-3'],
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style scoped>
.inset {
  margin-top: -60px;
}

.bkgd {
  background-color: #f5f5f5;
  height: calc(100vh - 80px);
}
</style>
