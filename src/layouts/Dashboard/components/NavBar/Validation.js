export default function validate(values) {
    let errors = {};
   
  ///////////////////////////// user_type ////////////////////////////////////
    if (!values.user_type) {
      errors.user_type = 'User Type is required';
    }  
    ///////////////////////////// user ////////////////////////////////////
    if (!values.user) {
        errors.user = 'User  is required';
      }   
      ///////////////////////////// start_datetime ////////////////////////////////////
    if (!values.start_datetime) {
        errors.start_datetime = 'Start Date is required';
      } 
        ///////////////////////////// Note ////////////////////////////////////
    if (!values.note) {
        errors.note = 'Note is required';
      } 
    return errors;
  };
  