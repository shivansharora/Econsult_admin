import uuid from 'uuid/v1';
// import moment from 'moment';

import mock from 'utils/mock';

mock.onGet('/api/unapprovedphrases').reply(200, {
  unphrases: [
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Active'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
    {
      id: uuid(),
      phrase_category:'Complaint Title',
      english_phrase:'Fever',
      hindi_phrase:'बुखार',
      english_description:'An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.An abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium.',
      hindi_description:'आमतौर पर शरीर के ताप का घटना-बढ़ना, जिसे बुखार कहते हैं, इसकी रोग-प्रतिरोधआत्मक प्रणाली का किसी बाहरी संक्रमण से मुक़ाबला करने का एक तरीका होता है। मगर, कई बार यह हो सकता है की आपका तापमान ज़्यादा बढ़ जाए और यह बुखार एक गंभीर समस्या बन सकता है ।',
      status:'Inactive'

    },
  ]
});

