import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/camps').reply(200, {
  camps: [
    {
      id: uuid(),
      camp_type: 'Pathalogy Camp',
      author: {
       
        avatar: '/images/avatars/chikitsamitra.png'
      },
      camp_location:'Delhi',
      doctors: 'Arvind Kumar,Pawan Singh',
      mso:'Shivam Gupta',
      start_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
        id: uuid(),
        camp_type: 'Pathalogy Camp',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        camp_location:'Delhi',
        doctors: 'Arvind Kumar,Pawan Singh',
        mso:'Shivam Gupta',
        start_date: moment(),
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        camp_type: 'Pathalogy Camp',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        camp_location:'Delhi',
        doctors: 'Arvind Kumar,Pawan Singh',
        mso:'Shivam Gupta',
        start_date: moment(),
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        camp_type: 'Pathalogy Camp',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        camp_location:'Delhi',
        doctors: 'Arvind Kumar,Pawan Singh',
        mso:'Shiv Gupta',
        start_date: moment(),
        updated_at: moment().subtract(24, 'minutes')
      },
      {
          id: uuid(),
          camp_type: 'Pathalogy Camp',
          author: {
           
            avatar: '/images/avatars/chikitsamitra.png'
          },
          camp_location:'Delhi',
          doctors: 'Arvind Kumar,Pawan Singh',
          mso:'Shivam Gupta',
          start_date: moment(),
          updated_at: moment().subtract(24, 'minutes')
        },
        {
          id: uuid(),
          camp_type: 'Pathalogy Camp',
          author: {
           
            avatar: '/images/avatars/chikitsamitra.png'
          },
          camp_location:'Delhi',
          doctors: 'Arvind Kumar,Pawan Singh',
          mso:'Shivam Gupta',
          start_date: moment(),
          updated_at: moment().subtract(24, 'minutes')
        },
  ]
});

