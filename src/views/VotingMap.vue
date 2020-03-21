<template>
  <v-container>
    <v-layout column align-center>
      <v-card width="100%">
        <v-card-title primary-title class="display-1 primary white--text"
          >Let's go!</v-card-title
        >
        <v-card-text>
          <v-flex>
            <div class="subheading">
              <p>
                Clicking a state on the map will take you to the voter
                registration form (online version if available).
              </p>
            </div>
          </v-flex>
          <v-divider></v-divider>
          <v-flex>
            <Map urlKey="voteUrl"></Map>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  components: {
    Map
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
