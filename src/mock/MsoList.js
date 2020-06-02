import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/msolist').reply(200, {
  msos: [
    {
      id: uuid(),
      name: 'Vishal Singh',
      author: {
       
        avatar: '/images/avatars/avatar_50.jpg'
      },
      age:40,
      mobile: '7017483927',
      storecode:'25456',
      mode:'Active',
      registered_date: moment(),
      rating:'4.5/5',
    },
    {
        id: uuid(),
        name: 'Pawan Arora',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:35,
        mobile: '7017483927',
        storecode:'92564',
        mode:'Active',
        registered_date: moment(),
        rating:'4.5/5',
      },
      {
        id: uuid(),
        name: 'Arun Sharma',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:45,
        mobile: '7017483927',
        storecode:'65897',
        mode:'Training',
        registered_date: moment(),
        // rating:'4.5/5',
      },
      {
        id: uuid(),
        name: 'Shivam Singh',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:40,
        mobile: '7017483927',
        storecode:'58789',
        mode:'Active',
        registered_date: moment(),
        rating:'4/5',
      },
      {
        id: uuid(),
        name: 'Varun Kapoor',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:32,
        mobile: '7017483927',
        storecode:'45871',
        mode:'Active',
        registered_date: moment(),
        rating:'3.5/5',
      }, {
        id: uuid(),
        name: 'Varun Kapoor',
        author: {
         
          avatar: '/images/avatars/avatar_50.jpg'
        },
        age:32,
        mobile: '7017483927',
        storecode:'45871',
        mode:'Active',
        registered_date: moment(),
        rating:'3.5/5',
      }
  ]
});

