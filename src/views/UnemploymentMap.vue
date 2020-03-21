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
                Clicking a state on the map or in the dropdown will take you
                that state's Corona Virus information page (if available) or
                unemployment page.
              </p>
            </div>
          </v-flex>
          <v-flex>
            <v-autocomplete
              v-model="selectedState"
              :items="stateList"
              item-text="name"
              item-value="coronaUrl"
              outline
              label="Select a state"
              class="mt-2"
              ref="autoComplete"
            >
            </v-autocomplete>
            <v-btn
              @click="visitSite()"
              :disabled="!selectedState"
              color="primary"
            >
              Go!
            </v-btn>
          </v-flex>
          <v-divider></v-divider>
          <v-flex>
            <Map urlKey="coronaUrl"></Map>
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
  },
  data() {
    return {
      selectedState: null
    }
  },
  methods: {
    visitSite() {
      window.open(this.selectedState, '_blank')
    }
  },
  computed: {
    filteredItems() {
      return this.$refs.autoComplete.filteredItems
    },
    stateList() {
      return this.$store.getters.getStateList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
