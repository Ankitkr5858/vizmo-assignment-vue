<template>
  <v-footer height="auto" dark>
    <v-card
      flat
      tile
      :color="$root.themeColor"
      class="text-xs-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt mattis ultrices. Donec scelerisque imperdiet tortor, id elementum orci tincidunt nec. Fusce ac ligula ac est hendrerit vestibulum. Donec at lectus hendrerit quam scelerisque euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent risus erat, commodo sed purus vel, eleifend feugiat magna. Nunc vel consectetur dui. Morbi eget aliquam ipsum. Nam ultrices lorem vel velit pharetra, nec posuere eros iaculis.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2022
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style>

</style>
