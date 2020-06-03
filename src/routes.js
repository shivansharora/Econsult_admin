
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import Dashboard from './views/Dashboard';
// import DoctorCategory from './views/DoctorCategory/DoctorCategory';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard
      },
      {
        path: '/doctor_list',
        exact: true,
        component: lazy(() => import('./views/DoctorList/DoctorList'))
      },
      // {
      //   path: '/associated_symptoms',
      //   exact: true,
      //   component: lazy(() => import('./views/Symtoms/Symptoms'))
      // },
      // {
      //   path: '/create_symptoms',
      //   exact: true,
      //   component: lazy(() => import('./views/Symtoms/AddSymptoms'))
      // },
      {
        path: '/create_doctor',
        exact: true,
        component: lazy(() => import('./views/CreateDoctor/CreateDoctor'))
      },
      {
        path: '/edit_doctor/:id',
        exact: true,
        component: lazy(() => import('./views/CreateDoctor/EditDoctor'))
      },
      {
        path: '/create_camp',
        exact: true,
        component: lazy(() => import('./views/CreateCamp/CreateCamp'))
      },
      {
        path: '/edit_camp/:id',
        exact: true,
        component: lazy(() => import('./views/CreateCamp/EditCamp'))
      },
      {
        path: '/camp_list',
        exact: true,
        component: lazy(() => import('./views/Camp/CampList'))
      },
      {
        path: '/camp_detail/:id',
        exact: true,
        component: lazy(() => import('./views/CampDetail'))
      },
      {
        path: '/doctor_detail/:id',
        exact: true,
        component: lazy(() => import('./views/DoctorList/DoctorDetail/DoctorDetail'))
      },
      {
        path: '/edit_detail/:id',
        exact: true,
        component: lazy(() => import('./views/DoctorList/EditDetail/EditDetail'))
      },
      {
        path: '/doctor_verification',
        exact: true,
        component: lazy(() => import('./views/DoctorVerification/DoctorVerificationList'))
      },
      {
        path: '/doctor_verification/:id',
        exact: true,
        component: lazy(() => import('./views/DoctorVerification/DoctorMultiForm/DoctorMultiForm'))
      },
      {
        path: '/mso_list',
        exact: true,
        component: lazy(() => import('./views/MsoList/MsoList'))
      },
      {
        path: '/create_mso',
        exact: true,
        component: lazy(() => import('./views/CreateMso/CreateMso'))
      },
      {
        path: '/create_mso_staff',
        exact: true,
        component: lazy(() => import('./views/CreateMso/CreateMsoStaff'))
      },
      {
        path: '/add_mso_role/:id',
        exact: true,
        component: lazy(() => import('./views/MsoDetail/AddRole'))
      },
      {
        path: '/edit_mso/:id',
        exact: true,
        component: lazy(() => import('./views/CreateMso/EditMso'))
      },
      {
        path: '/mso_detail/:id',
        exact: true,
        component: lazy(() => import('./views/MsoList/MsoTabs/MsoTabs'))
      },
      {
        path: '/user_list',
        exact: true,
        component: lazy(() => import('./views/UserList/UserList'))
      },
      {
        path: '/add_user_role/:id',
        exact: true,
        component: lazy(() => import('./views/UserList/UserCard/AddRole'))
      },
      {
        path: '/report',
        exact: true,
        component: lazy(() => import('./views/Report/Report'))
      },
      {
        path: '/create_user',
        exact: true,
        component: lazy(() => import('./views/CreateUser/CreateUser'))
      },
      {
        path: '/edit_user/:id',
        exact: true,
        component: lazy(() => import('./views/CreateUser/EditUser'))
      },
      {
        path: '/promocode',
        exact: true,
        component: lazy(() => import('./views/PromoCode/Promocode'))
      },
      {
        path: '/create_promocode',
        exact: true,
        component: lazy(() => import('./views/PromoCode/CreatePromocode'))
      },
      {
        path: '/edit_promocode/:id',
        exact: true,
        component: lazy(() => import('./views/PromoCode/EditPromocode'))
      },
      {
        path: '/create_phrase',
        exact: true,
        component: lazy(() => import('./views/Phrases/AddPhrase'))
      },
      {
        path: '/medical_phrase',
        exact: true,
        component: lazy(() => import('./views/Phrases/MedicalPhrases'))
      },
      {
        path: '/edit_phrase/:id',
        exact: true,
        component: lazy(() => import('./views/Phrases/EditPhrase'))
      },
      {
        path: '/role_list',
        exact: true,
        component: lazy(() => import('./views/RoleList/RoleList'))
      },
      {
        path: '/role_detail/:id',
        exact: true,
        component: lazy(() => import('./views/RoleList/RoleDetail/RoleDetail'))
      },
      {
        path: '/create_role',
        exact: true,
        component: lazy(() => import('./views/RoleList/CreateRole'))
      },
      {
        path: '/edit_role/:id',
        exact: true,
        component: lazy(() => import('./views/RoleList/EditRole'))
      },

      {
        path: '/section_list',
        exact: true,
        component: lazy(() => import('./views/SectionList/SectionList'))
      },
      {
        path: '/create_section',
        exact: true,
        component: lazy(() => import('./views/SectionList/CreateSection/CreateSection'))
      },

      {
        path: '/edit_section/:id',
        exact: true,
        component: lazy(() => import('./views/SectionList/CreateSection/EditSection'))
      },
    
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
