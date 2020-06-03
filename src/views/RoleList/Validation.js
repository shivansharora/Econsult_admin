export default function validate(values) {
  let errors = {};

  ///////////////////////////// role ////////////////////////////////////
  if (!values.role) {
    errors.role = 'Role is required';
  }
  //////////////////////////// role_title///////////////////////////////////
  if (!values.role_title) {
    errors.role_title = 'Role Title is required';
  }

  //////////////////////////// status ////////////////////////////////////
  // if (!values.status) {
  //   errors.status = 'Status is required';
  // }


  return errors;
};
