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
      placehoolder: null,
      chartData: [
        ['State', 'Select'],
        ['US-MI', 0],
      ],
      chartOptions: {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
      },
      chartEvents: {
        'regionClick': (region) => {
          console.log(region)
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
