import uuid from 'uuid/v1';
// import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/doctorreportlist').reply(200, {
  doctors: [
    {
      id: uuid(),
      title: 'Arun Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      total_online_duration: '16 hours',
      total_patient_viewed:'25',
      avg_review_time:'4 hours',
      avg_rating:'4.5/5',
    },
    {
        id: uuid(),
        title: 'Varun Sharma',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        total_online_duration: '36 hours',
        total_patient_viewed:'35',
        avg_review_time:'6 hours',
        avg_rating:'4/5',
      },
      {
        id: uuid(),
        title: 'Sneha Gupta',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        total_online_duration: '25 hours',
        total_patient_viewed:'10',
        avg_review_time:'5 hours',
        avg_rating:'4.2/5',
      },
      {
        id: uuid(),
        title: 'Shivam Dubey',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        total_online_duration: '24 hours',
        total_patient_viewed:'20',
        avg_review_time:'5 hours',
        avg_rating:'3.9/5',
      },
      {
        id: uuid(),
        title: 'Pawan Singh',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        total_online_duration: '16 hours',
        total_patient_viewed:'25',
        avg_review_time:'4 hours',
        avg_rating:'4.5/5',
      },
      {
        id: uuid(),
        title: 'Pawan Singh',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        total_online_duration: '16 hours',
        total_patient_viewed:'25',
        avg_review_time:'4 hours',
        avg_rating:'4.5/5',
      },
  ]
});

