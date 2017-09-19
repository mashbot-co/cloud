<template>
  <v-navigation-drawer
    persistent
    v-model="visibility"
    enable-resize-watcher
    absolute
    clipped
    @input="trackChange"
    class="grey lighten-5 pt-0 navigator"
    >

    <!-- CATEGORY ONE (start) -->
    <v-list class="transparent pt-3">

      <v-list-tile @click="$router.push({path: '/page-one'})">
        <v-list-tile-action>
          <v-icon medium primary>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="$router.push({path: '/page-one'})">
        <v-list-tile-action>
          <v-icon warning medium>apps</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>MashApps</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="$router.push({path: '/page-one'})">
        <v-list-tile-action>
          <v-icon medium success>store_mall_directory</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Marketplace</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY ONE (end) -->

    <hr class="divider">

    <!-- CATEGORY TWO (start) -->
    <v-list class="transparent">
      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>account_box</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Account Information</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>receipt</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Invoices</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>credit_card</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Payment Methods</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>donut_large</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Usage</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY TWO (end) -->

    <hr class="divider">

    <!-- CATEGORY THREE (start) -->
    <v-list class="transparent">
      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>library_books</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Documentation</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>headset_mic</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Support</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY THREE (end) -->

    </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'navigator',
    methods: {
      ...mapActions([
        'closeNavigator'
      ]),
      trackChange (e) {
        if (this.navigatorVisible === true && e === false) {
          this.closeNavigator()
        }
      }
    },
    computed: {
      ...mapGetters({
        navigatorVisible: 'navigatorVisible'
      }),
      visibility: {
        get () {
          return this.navigatorVisible
        },
        set () {

        }
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
div.navigation-drawer__border {
  display: none !important;
}

</style>
