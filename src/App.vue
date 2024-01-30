<template>
  <v-app>
    <v-main>
      <v-app-bar app color="deep-purple-darken-2">
          <v-toolbar-title>Word Finder Desktop</v-toolbar-title>
      </v-app-bar>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage'

export default {
  name: 'App',
  components: {
    HomePage
  },

  data: () => ({
    //
  }),
}
</script>
