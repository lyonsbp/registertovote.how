<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex xs12 lg8>
            <v-card width="100%">
              <v-layout row>
                <v-flex>
                  <v-card-title
                    primary-title
                    class="display-1 primary white--text">
                    About
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs3>
                  <v-img
                    class="ma-2"
                    :src="require('@/assets/voting-ballot-box.svg')"
                    height="250"
                    contain
                  >
                  </v-img>
                </v-flex>
                <v-flex xs9>
                  <v-card-text>
                    <v-flex>
                      <div class="subheading ma-2">
                        <p>
                          Registering to vote in the United States can be confusing!
                          <a href="/">registertovote.how</a> hopes to take away some of the frustrations,
                          by providing visitors a link to their states online voting registration (when available).
                        </p>
                        <p>
                          The web site is open source and contributions, fixes, ideas, etc are welcome!
                          Stop by at <a href="https://github.com/lyonsbp/registertovote.how" target="_blank">https://github.com/lyonsbp/registertovote.how</a>
                        </p>
                      </div>
                    </v-flex>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
