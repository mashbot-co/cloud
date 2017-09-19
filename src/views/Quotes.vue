<template>
  <div>
  <v-tabs dark>
      <v-toolbar dense class="light-blue darken-1" dark>
        <v-toolbar-title class="heading">Quotes</v-toolbar-title>
      </v-toolbar>
      <v-tabs-bar class="light-blue darken-1">
        <v-tabs-slider class="white"></v-tabs-slider>
        <v-tabs-item
          key="mine"
          href="#tab-summary"
        >
          Summary
        </v-tabs-item>
        <v-tabs-item
          key="all"
          href="#tab-all"
        >
          List
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content id="tab-summary">
          <quotes-summary />
        </v-tabs-content>
        <v-tabs-content id="tab-all">
          <quotes-view />
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
      <v-btn
        class="pink"
        key="edit"
        dark
        fab
        fixed
        bottom
        right
      >
        <v-icon>add</v-icon>
      </v-btn>
  </div>
</template>

<script>
import QuotesSummary from '../components/quotes/Summary'
import QuotesView from '../components/quotes/View'

export default {
  name: 'quotes',
  components: {
    QuotesSummary,
    QuotesView
  },
  data () {
    return {
      msg: 'Welcome to BQ Quotes'
    }
  }
}
</script>

<style scoped>
main {
  background: #f5f5f5
}
</style>
