// Core Components
import Toolbar from '../components/core/Toolbar.vue';
import Navigation from '../components/core/NavigationDrawer.vue';
import Breadcrumbs from '../components/core/Breadcrumbs.vue';
import PageFooter from '../components/core/PageFooter.vue';
import DataTableEmployee from '../components/DataTableEmployee.vue';
import DataTableCheckIns from '../components/DataTableCheckIns.vue';

function setupComponents(Vue){
  Vue.component('toolbar', Toolbar);
  Vue.component('navigation', Navigation);
  Vue.component('breadcrumbs', Breadcrumbs);
  Vue.component('page-footer', PageFooter);
  Vue.component('data-table-employee', DataTableEmployee);
  Vue.component('data-table-check-ins', DataTableCheckIns);
}


export {
  setupComponents
}
