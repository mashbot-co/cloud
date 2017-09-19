<template>
<v-container fluid grid-list-lg>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="pr-3 pl-3 pb-2 pt-2">
        <v-text-field
              name="input-2-3"
              hint="Search by quote#, organization or material"
              prepend-icon="search"
              single-line
              hide-details
            ></v-text-field>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <v-list-tile avatar ripple v-for="(item, index) in quotes" v-bind:key="item.quote_id" @click="">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.organization_name }}</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.audit_created_by_name }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.audit_created_at }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.payment_terms }}</v-list-tile-action-text>
              <v-icon class="grey--text text--lighten-1">star_border</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {db} from '../../firebase'
var quotesRef = db.ref('quotes/').orderByChild('auditCreatedAt').limitToLast(10)
// var quotesRef
// db.ref('quotes').remove()

export default {
  name: 'quotes-view',
  data () {
    return {
    }
  },
  firebase: {
    quotes: quotesRef
  },
  methods: {
  }
}
</script>

<style scoped>
.input-group {
  padding: 0 !important
}

</style>
