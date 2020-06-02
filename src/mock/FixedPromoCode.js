import uuid from 'uuid/v1';
import moment from 'moment';
// import { colors } from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/fixedpromocode').reply(200, {
    fixedPromos: [
    {
      id: uuid(),
      title: 'Chikitsamitra',
      author: {
       
        avatar: '/images/avatars/chikitsamitra.png'
      },
      type:'Fixed',
      discount:'300',
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
        type:'Fixed',
        discount:'100',
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
        type:'Fixed',
        discount:'50',
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
        type:'Fixed',
        discount:'250',
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
        type:'Fixed',
        discount:'160',
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
        type:'Fixed',
        discount:'220',
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
        type:'Fixed',
        discount:'100',
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
        type:'Fixed',
        discount:'100',
        start_datetime: '01/06/2020',
        end_datetime:'01/06/2020',
        status:'Active',
        promo:'HQ1234',
        updated_at: moment().subtract(24, 'minutes')
      },
  ]
});

