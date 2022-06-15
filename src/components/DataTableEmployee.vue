<template>
  <v-data-table
    class="table"
    :headers="headers"
    :items="employeeList"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">{{ props.item.id }}</td>
      <td @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">
        <v-avatar size="42">
          <img :src="props.item.avatar" :alt="props.item.name">
        </v-avatar>
      </td>
      <td @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">{{ props.item.name }}</td>
      <td @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">{{ props.item.email }}</td>
      <td @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">{{ props.item.phone }}</td>
      <td  @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">{{ props.item.department.join(', ') }}</td>
      <td @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">{{ moment(props.item.birthday).format("DD-MM-YYYY h:mm a") }}</td>
      <td @click="
        $router.push({
          name: 'EmployeeDetail',
          params: { id: props.item.id },
        })
      " class="text-xs-left">{{ props.item.country }}</td>
    </template>
  </v-data-table>
</template>

<script>
var moment = require('moment')

export default {
  props: ['employeeList'],
  data() {
    return {
      moment: moment,
      headers: [
        {
          value: 'id',
          align: 'left',
          sortable: true
        },
        {
          value: 'Avatar',
          align: 'left',
          sortable: false
        },
        {
          text: 'Name',
          value: 'Name',
          align: 'left',
          sortable: true
        },
        {
          text: 'Email',
          value: 'Email',
          align: 'left',
          sortable: false
        },
        {
          text: 'Phone',
          value: 'Phone',
          align: 'left',
          sortable: false
        },
        {
          text: 'Department',
          value: 'Department',
          align: 'left',
          sortable: false
        },
        {
          text: 'Birthday',
          value: 'Birthday',
          align: 'left',
          sortable: false
        },
        {
          text: 'Country',
          value: 'Country',
          align: 'left',
          sortable: false
        }
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
