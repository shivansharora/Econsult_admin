export default function validate(values) {
  let errors = {};
 
///////////////////////////// Camp Type ////////////////////////////////////
  if (!values.camp_type) {
    errors.camp_type = 'Camp Type is required';
  } 
//////////////////////////// Camp Location ///////////////////////////////////
  if (!values.camp_location) {
    errors.camp_location = 'Camp Location is required';
  }

//////////////////////////// Camp Description ////////////////////////////////////
    if (!values.camp_description) {
  errors.camp_description = 'Camp Description is required';
} 

/////////////////////////// Doctor //////////////////////////////////////
// if (!values.doctor) {
//   errors.doctor = 'Doctor is required';
// }

/////////////////////////// mso //////////////////////////////////////
if (!values.mso) {
  errors.mso = 'Mso is required';
}
 ///////////////////////////// title ////////////////////////////////////
 if (!values.title) {
  errors.title = 'Title is required';
} 

/////////////////////////// type //////////////////////////////////////
if (!values.type) {
  errors.type = 'Type is required';
}  
if (!values.percentage) {
    errors.percentage = 'Percetage value is required';
  }
if (!values.fixed) {
    errors.fixed = 'Flat value is required';
  } 

/////////////////////////// start_datetime //////////////////////////////////////
if (!values.start_datetime) {
  errors.start_datetime = 'Start date is required';
}

/////////////////////////// end_datetime //////////////////////////////////////
if (!values.end_datetime) {
  errors.end_datetime = 'End date is required';
}

/////////////////////////// Note //////////////////////////////////////
if (!values.note) {
  errors.note = 'Note is required';
}
  return errors;
};
