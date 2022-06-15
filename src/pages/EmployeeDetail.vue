<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- DataTable&TimeLine Starts -->
      <v-flex d-flex lg12 sm12 xs12>
        <data-table-employee :employeeList="employeeList"/>
      </v-flex>
      <!-- DataTable&TimeLine Ends -->



      <!-- DataTable&TimeLine Starts -->
      <v-flex d-flex lg12 sm12 xs12>
        <data-table-check-ins :checkIns="checkIns"/>
      </v-flex>
      <!-- DataTable&TimeLine Ends -->
    </v-layout>
  </v-container>
</template>

<script>
import { url } from '../constants'
var moment = require('moment')

export default {
  data() {
    return {
      moment: moment,
      employeeId: null,
      employeeList: [],
      checkIns: [],
    }
  },

  created() {
    const vm = this;

    if (this.$route.params && this.$route.params.id) {
      vm.employeeId = this.$route.params.id;
        vm.axios.get(url.employee+'/'+vm.employeeId).then(response => {
        var result = response && response.data;
        vm.employeeList = [result];
      });

      vm.axios.get(url.employee+'/'+vm.employeeId+'/checkin').then(response => {
        var result = response && response.data;
        vm.checkIns = result;
      });
    }

  }
}
</script>

<style>
</style>
