import Vue from 'vue';
import Router from 'vue-router';
import Error from '../pages/core/Error.vue';
import Employee from '../pages/Employee.vue';
import EmployeeDetail from '../pages/EmployeeDetail.vue'; 

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employee',
      component: Employee,
      meta: {
        breadcrumb: [
          { name: 'Employees' }
        ]
      }
    },
    {
      path: '/employee/:id',
      name: 'EmployeeDetail',
      component: EmployeeDetail,
      meta: {
        breadcrumb: [
          { name: 'Employee Detail' }
        ]
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
  ]
});
