import uuid from 'uuid/v1';
// import moment from 'moment';

import mock from 'utils/mock';

mock.onGet('/api/rolelist').reply(200, {
  roles: [
    {
      id: uuid(),
      role:'admin',
      role_title:'Admin',
      status:'Active'

    },
    {
        id: uuid(),
        role:'doctor',
        role_title:'Doctor',
        status:'Active'
  
      },
      {
        id: uuid(),
        role:'mso',
        role_title:'MSO',
        status:'Inactive'
  
      },
      {
        id: uuid(),
        role:'nurse',
        role_title:'Nurse',
        status:'Active'
  
      },
      {
        id: uuid(),
        role:'receptionist',
        role_title:'Receptionist',
        status:'Inactive'
  
      }
  ]
});

