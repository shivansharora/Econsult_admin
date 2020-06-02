import uuid from 'uuid/v1';
// import moment from 'moment';

import mock from 'utils/mock';

mock.onGet('/api/sectionlist').reply(200, {
  sections: [
    {
      id: uuid(),
      section:'meetings_new',
      section_title:'Meetings New',
      status:'Active'

    },
    {
        id: uuid(),
        section:'meetings_create',
        section_title:'Meetings Create',
        status:'Active'
  
      },
      {
        id: uuid(),
        section:'meetings_join_meeting',
        section_title:'Meetings Join Meeting',
        status:'Active'
  
      },
      {
        id: uuid(),
        section:'meetings_index',
        section_title:'Meetings Index',
        status:'Active'
  
      },
  ]
});

