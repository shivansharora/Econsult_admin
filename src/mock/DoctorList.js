import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/doctorlist').reply(200, {
  doctors: [
    {
      id: uuid(),
      title: 'Arun Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      age:40,
      number: '7017483927',
      degree:'MBBS',
      registered_date: moment(),
      end_date: moment(),
      rating:'4.5/5',
    },
    {
        id: uuid(),
        title: 'Ram Sharma',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:34,
        number: '7017483928',
        degree:'MBBS',
        registered_date: moment(),
        rating:'4/5',
      },
      {
        id: uuid(),
        title: 'Kamal Singh',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:45,
        number: '7017483929',
        degree:'MD',
        registered_date: moment(),
        rating:'4.6/5',
      },
      {
        id: uuid(),
        title: 'Pawan Kapoor',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:50,
        number: '7017483920',
        degree:'MBBS',
        registered_date: moment(),
        rating:'3.9/5',
      },
      {
        id: uuid(),
        title: 'Sneha Gupta',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:32,
        number: '7017483921',
        degree:'MD',
        registered_date: moment(),
        rating:'4.2/5',
      },
      {
        id: uuid(),
        title: 'Kartik Sharma',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:40,
        number: '7017483927',
        degree:'MBBS',
        registered_date: moment(),
        rating:'4/5',
      },
  ]
});

