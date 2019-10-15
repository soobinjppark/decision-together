<template>
  <v-app id="inspire">
    <v-content>
      <Navbar/>
      <router-view/>
      <v-footer class="teal lighten-3">
        <v-layout>
          <v-flex xs12 text-xs-center>© Vanderbilt University, 2019 All Rights Reserved</v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
</style>


