import uuid from 'uuid/v1';
// import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/msoreportlist').reply(200, {
  msos: [
    {
      id: uuid(),
      title: 'Arun Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      mso_id:12345,
      city:'Delhi',
      performance_rating:'4/5',
      total_patient_registered:'25',
      avg_time_for_registration:'4 hours',
    },
    {
        id: uuid(),
        title: 'Mohan Singh',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        mso_id:25456,
        city:'Delhi',
        performance_rating:'4.2/5',
        total_patient_registered:'35',
        avg_time_for_registration:'6 hours',
      },
      {
        id: uuid(),
        title: 'Rahul Sharma',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        mso_id:58745,
        city:'Delhi',
        performance_rating:'4.3/5',
        total_patient_registered:'15',
        avg_time_for_registration:'3 hours',
      },
      {
        id: uuid(),
        title: 'Shivam Dubey',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        mso_id:78945,
        city:'Delhi',
        performance_rating:'3.9/5',
        total_patient_registered:'25',
        avg_time_for_registration:'5 hours',
      },
      {
        id: uuid(),
        title: 'Deepak Kumar',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        mso_id:14785,
        city:'Delhi',
        performance_rating:'4/5',
        total_patient_registered:'30',
        avg_time_for_registration:'6 hours',
      },
      {
        id: uuid(),
        title: 'Deepak Kumar',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        mso_id:14785,
        city:'Delhi',
        performance_rating:'4/5',
        total_patient_registered:'30',
        avg_time_for_registration:'6 hours',
      },
  ]
});

