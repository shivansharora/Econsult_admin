import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/userlist').reply(200, {
  activeusers: [
    {
      id: uuid(),
      name: 'Sneha Singh',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      role:'Nurse',
      age:40,
      number: '7017483927',
      user_name:'Sneha@gmail.com',
      mode:'Active',
      registered_date: moment(),
    },
    {
        id: uuid(),
        name: 'Palak Gupta',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Nurse',
        age:44,
        number: '7017483927',
        user_name:'palak@gmail.com',
        mode:'Active',
        registered_date: moment(),
      },
      {
        id: uuid(),
        name: 'Palak Gupta',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Nurse',
        age:44,
        number: '7017483927',
        user_name:'palak@gmail.com',
        mode:'Active',
        registered_date: moment(),
      },
      {
        id: uuid(),
        name: 'Disha Singh',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Receptionist',
        age:24,
        number: '7017483927',
        user_name:'disha@gmail.com',
        mode:'Active',
        registered_date: moment(),
      },
      {
        id: uuid(),
        name: 'Payal Sinha',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Nurse',
        age:40,
        number: '7017483927',
        user_name:'payal@gmail.com',
        mode:'Active',
        registered_date: moment(),
      },
      {
        id: uuid(),
        name: 'Ramesh Gupta',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Receptionist',
        age:40,
        number: '7017483927',
        user_name:'ramesh@gmail.com',
        mode:'Active',
        registered_date: moment(),
      }
  ]
});

