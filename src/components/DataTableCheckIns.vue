<template>
  <v-data-table
          class="table"
          :headers="checkInsHeaders"
          :items="checkIns"
          :rows-per-page-items="[10, 25]">
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.location }}</td>
            <td class="text-xs-left">{{ moment(props.item.checkin).format("DD-MM-YYYY h:mm a") }}</td>
            <td class="text-xs-left">{{ props.item.purpose }}</td>
            
          </template>
  </v-data-table>
</template>

<script>
var moment = require('moment')
export default {
  props: ['checkIns'],
  data() {
    return {
      moment: moment,
      checkInsHeaders: [
        {
          text: 'Location',
          value: 'Location',
          align: 'left',
          sortable: true
        },
        {
          text: 'Checkin',
          value: 'Checkin',
          align: 'left',
          sortable: true
        },
        {
          text: 'Purpose',
          value: 'Purpose',
          align: 'left',
          sortable: true
        },
      ]
    }
  },

  methods: {
  },

  created() {
  }
}
</script>

<style>
</style>
