import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/projects').reply(200, {
  projects: [
    {
      id: uuid(),
      name: 'Arun Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      age:'40',
      gender:'Male',
      number: '7017483927',
      registered_date: moment(),
      last_visit_date: moment(),
    },
    {
      id: uuid(),
      name: 'Raj Arora',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      age:'40',
      gender:'Male',
      number: '7017213654',
      registered_date: moment(),
      last_visit_date: moment(),
    },
    {
      id: uuid(),
      name: 'Arun Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      age:'25',
      gender:'Male',
      number: '7017483927',
      registered_date: moment(),
      last_visit_date: moment(),
    },
    {
      id: uuid(),
      name: 'Prakash Singh',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      age:'30',
      gender:'Male',
      number: '7017483927',
      registered_date: moment(),
      last_visit_date: moment(),
    },
    {
      id: uuid(),
      name: 'Saloni Chabra',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      age:'45',
      gender:'Female',
      number: '7017483927',
      registered_date: moment(),
      last_visit_date: moment(),
    },
    {
      id: uuid(),
      name: 'Sandeep Kumar',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      doctor: 'Avinash',
      age:'40',
      gender:'Male',
      number: '7017483927',
      registered_date: moment(),
      last_visit_date: moment(),
    }
  ]
});

