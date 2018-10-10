<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex xs12 lg8>
          <v-card width="100%">
            <v-card-title
              primary-title
              class="display-1 primary white--text">
              Let's go!
            </v-card-title>
            <v-card-text>
              <v-flex>
                <div class="subheading">
                  <p>This form will take you to the voter registration form (online version if available).</p>
                  <p>Future versions of the site will also provided localized election information.</p>
                </div>
              </v-flex>
              <v-divider></v-divider>
              <v-flex>
                <v-autocomplete
                  v-model="selectedState"
                  :items="stateList"
                  item-text="name"
                  item-value="url"
                  outline
                  label="Select a state"
                  class="mt-2"
                  ref="autoComplete">
               </v-autocomplete>
              </v-flex>
            </v-card-text>
            <v-layout row justify-end>
              <v-card-actions>
                <v-btn
                  @click="visitSite()"
                  :disabled="!selectedState"
                  color="primary">
                  Go!
                </v-btn>
              </v-card-actions>
            </v-layout>
         </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      selectedState: null
    }
  },
  methods: {
    visitSite () {
      window.open(this.selectedState, '_blank')
    }
  },
  computed: {
    filteredItems () {
      return this.$refs.autoComplete.filteredItems
    },
    stateList () {
      return this.$store.getters.getStateList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
