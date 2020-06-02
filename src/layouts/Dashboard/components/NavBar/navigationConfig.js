
import React from 'react';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import QueueIcon from '@material-ui/icons/Queue';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ReportIcon from '@material-ui/icons/Report';
import RedeemIcon from '@material-ui/icons/Redeem';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import PeopleIcon from '@material-ui/icons/People';
import PieChartIcon from '@material-ui/icons/PieChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
export default [
  {
    pages: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: DashboardIcon,
      },
      {
        title: 'Doctor List',
        href: '/doctor_list',
        icon: QueueIcon,
      },
      {
        title: 'Verify Doctor',
        href: '/doctor_verification',
        icon: VerifiedUserIcon,
      },
      {
        title: 'MSO list',
        href: '/mso_list',
        icon: ListAltIcon,
      },
      {
        title: 'User List',
        href: '/user_list',
        icon: PersonAddIcon,
      },
      {
        title: 'Camp',
        href: '/camp_list',
        icon: FormatListBulletedIcon,
      },
      // {
      //   title: 'Notification',
      //   href: '/notification',
      //   icon: NotificationImportantIcon,
      // },
      {
        title: 'Reports',
        href: '/report',
        icon: ReportIcon,
      },
      {
        title: 'Roles List',
        href: '/role_list',
        icon: PeopleIcon,
      },
      {
        title: 'Section List',
        href: '/section_list',
        icon: PieChartIcon,
      },
      {
        title: 'Promo Code',
        href: '/promocode',
        icon: RedeemIcon,
      },
      {
        title: 'Medical Problem',
        href: '/medical_phrase',
        icon: SortByAlphaIcon,
      },
      // {
      //   title: 'Symptoms List',
      //   href: '/associated_symptoms',
      //   icon: AssignmentIcon,
      // },
      // {
      //   title: 'Logout',
      //   href: '/auth/login',
      //   icon: ExitToAppIcon
      // },
    ]
  }
];
