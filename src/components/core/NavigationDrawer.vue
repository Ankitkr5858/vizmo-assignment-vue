<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Employee' }">
        <img src="static/logo.png" width="36px"></img>
      </router-link>
      <router-link :to="{ name: 'Employee' }" class="text">
         Vizmo
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('Employee', 1)">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >Employees</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
