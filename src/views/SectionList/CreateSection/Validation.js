export default function validate(values) {
    let errors = {};
   
  ///////////////////////////// section ////////////////////////////////////
    if (!values.section) {
      errors.section = 'Section is required';
    } 
  //////////////////////////// section_title///////////////////////////////////
    if (!values.section_title) {
      errors.section_title = 'Section Title is required';
    }
  
  //////////////////////////// status ////////////////////////////////////
      if (!values.status) {
    errors.status = 'Status is required';
  } 
  
  
    return errors;
  };
  