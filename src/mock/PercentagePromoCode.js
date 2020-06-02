import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/percentagepromocode').reply(200, {
  percentagePromos: [
    {
      id: uuid(),
      title: 'Chikitsamitra',
      author: {
       
        avatar: '/images/avatars/chikitsamitra.png'
      },
      type:'Percentage',
      discount:'30',
      start_datetime:'01/06/2020',
      end_datetime:'01/06/2020',
      status:'Active',
      promo:'HQ1234',
      updated_at: moment().subtract(24, 'minutes')
    },
    {
        id: uuid(),
        title: 'Chikitsamitra',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        type:'Percentage',
        discount:'35',
        start_datetime:'01/06/2020',
        end_datetime:'05/06/2020',
        status:'Inactive',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Chikitsamitra',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        type:'Percentage',
        discount:'40',
        start_datetime:'01/06/2020',
        end_datetime:'06/06/2020',
        status:'Active',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Chikitsamitra',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        type:'Percentage',
        discount:'50',
        start_datetime:'01/06/2020',
        end_datetime:'08/06/2020',
        status:'Active',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Chikitsamitra',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        type:'Percentage',
        discount:'60',
        start_datetime:'01/06/2020',
        end_datetime:'10/06/2020',
        status:'Inactive',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Chikitsamitra',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        type:'Percentage',
        discount:'20',
        start_datetime:'01/06/2020',
        end_datetime:'01/06/2020',
        status:'Active',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Chikitsamitra',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        type:'Percentage',
        discount:'10',
        start_datetime: '01/06/2020',
        end_datetime:'01/06/2020',
        status:'Inactive',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
      {
        id: uuid(),
        title: 'Chikitsamitra',
        author: {
         
          avatar: '/images/avatars/chikitsamitra.png'
        },
        type:'Percentage',
        discount:'10',
        start_datetime: '01/06/2020',
        end_datetime:'01/06/2020',
        status:'Active',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
  ]
});

