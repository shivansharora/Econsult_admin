import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/inactiveuserlist').reply(200, {
    InactiveUsers: [
    {
      id: uuid(),
      title: 'Sneha Singh',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      role:'Nurse',
      age:40,
      number: '7017483927',
      username:'Sneha@gmail.com',
      mode:'Inactive',
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
        id: uuid(),
        title: 'Palak Gupta',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Nurse',
        age:44,
        number: '7017483927',
        username:'palak@gmail.com',
        mode:'Inactive',
        start_date: moment(),
        end_date: moment(),
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Disha Singh',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Receptionist',
        age:24,
        number: '7017483927',
        username:'disha@gmail.com',
        mode:'Inactive',
        start_date: moment(),
        end_date: moment(),
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Payal Sinha',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Nurse',
        age:40,
        number: '7017483927',
        username:'payal@gmail.com',
        mode:'Inactive',
        start_date: moment(),
        end_date: moment(),
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Ramesh Gupta',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        role:'Receptionist',
        age:40,
        number: '7017483927',
        username:'ramesh@gmail.com',
        mode:'Inactive',
        start_date: moment(),
        end_date: moment(),
        updated_at: moment().subtract(24, 'minutes')
      }
  ]
});

