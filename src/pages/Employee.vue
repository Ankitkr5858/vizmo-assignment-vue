<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- DataTable&TimeLine Starts -->
      <v-flex d-flex lg12 sm12 xs12>
        <data-table-employee :employeeList="employeeList"/>
      </v-flex>
      <!-- DataTable&TimeLine Ends -->
    </v-layout>
  </v-container>
</template>

<script>
import { url } from '../constants'

export default {
  data() {
    return {
      employeeList: [],
    }
  },

  created() {
    const vm = this;
    vm.axios.get(url.employee).then(response => {
      var result = response && response.data;
      vm.employeeList = result;
    });
  }
}
</script>

<style>
</style>
