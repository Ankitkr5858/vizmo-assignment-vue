<template>
  <v-toolbar
    dark
    app
    :color="$root.themeColor">
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu  class="toolbar-menu-item" offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">

      <v-btn icon flat slot="activator" @click="notifications.map(x => x.isActive = false)">
        <v-badge color="green" overlap>
          <span slot="badge" v-if="notifications.filter(x => x.isActive).length > 0">
             {{ notifications.filter(x => x.isActive).length }}
          </span>
          <v-icon medium>notifications</v-icon>
        </v-badge>
      </v-btn>

      <v-card class="elevation-0">
        <v-toolbar card dense color="transparent">
          <v-toolbar-title><h5>You have {{ notifications.length }} new notification(s)</h5></v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-0">
          <v-list two-line class="pa-0">
          <template v-for="(item, index) in notifications">
            <v-divider :key="index" />
            <v-list-tile avatar :key="item.title" @click.parent="item.onClick">
            <v-list-tile-avatar :color="item.color">
              <v-icon dark>{{item.icon}}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action class="caption">
              {{item.actionAt}}
            </v-list-tile-action>
            </v-list-tile>
          </template>
          </v-list>
          <v-divider></v-divider>
          <v-btn block flat v-if="false">See all notifications</v-btn>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
      </v-menu>
      <v-menu class="toolbar-menu-item" offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator" :ripple="false">
        <v-avatar size="42px">
          <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"/>
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item,index) in items"
          :key="index"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          @click="item.click">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>

export default {
  data() {
    return {
      items: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'Profile',
          click: (e) => {
          }
        },
        {
          icon: 'settings',
          href: '#',
          title: 'Settings',
          click: () => {
            const vm = this;

            vm.dialogSettings = true;
          }
        },
        {
          icon: 'exit_to_app',
          href: '#',
          title: 'Log Out',
          click: () => {
            const vm = this;

            vm.$router.push({ name: 'Login' });
          }
        }
      ],
      notifications:
      [
        {
          title: 'New mail from Adam Joe',
          color: 'light-blue',
          icon: 'email',
          actionAt: '12 min ago',
          isActive: true,
          onClick: () => {
            const vm = this;
          }
        },
        {
          title: 'Scheculed meeting',
          color: 'red',
          icon: 'calendar_today',
          actionAt: '46 min ago',
          isActive: true,
          onClick: () => {
            const vm = this;
          }
        }
      ],
    }
  },

  computed: {
  },
  methods: {
    toggleNavigationBar() {
      const vm = this;
      vm.$emit('toggleNavigationBar');
    },
  }
};
</script>
<style>
  .toolbar-menu-item {
    padding-left: 5px;
  }
  
  
</style>