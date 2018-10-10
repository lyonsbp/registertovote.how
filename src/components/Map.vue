<template>
  <GChart
    type="GeoChart"
    :data="chartData"
    :options="chartOptions"
    :events="chartEvents"
  />
</template>

<script>

import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['State', 'Select'],
        //['US-MI', 0],
      ],
      chartOptions: {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
      },
      chartEvents: {
        'regionClick': (region) => {
          this.visitSite(this.$store.getters.getStateUrlByRegion(region.region))
        }
      }
    }
  },
  methods: {
    visitSite (url) {
      if (url) { 
        window.open(url, '_blank')
      }
    }
  },
}
</script>

<style scoped>

</style>
