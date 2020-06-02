export default function validate(values) {
    let errors = {};
    
  //////////////////////////// Mobile ///////////////////////////////////
    if (!values.mobile) {
      errors.mobile = 'Mobile is required';
    }else if (isNaN(values.mobile)) {
        errors.mobile = 'User must write digits only not characters';
      }else if (values.mobile.length !==10) {
        errors.mobile = 'Number length should be 10';
      }
  //////////////////////////// Email ////////////////////////////////////
      if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  
  
    ///////////////////////////////// curr_pass ///////////////////////////////  
    if (!values.current_password) {
        errors.current_password = 'Current Password is required';
        }
    
          ///////////////////////////////// curr_pass ///////////////////////////////  
          if (!values.new_password) {
            errors.new_password = 'New Password is required';
            }
      ///////////////////////////////// confirmpassword /////////////////////////////// 
      if (!values.confirm_password) {
        errors.confirm_password = 'Confirm Password is required';
      } else if(values.new_password !==values.confirm_password) {
        errors.confirm_password='Password are not Matching'
      }      
    return errors;
  };
  