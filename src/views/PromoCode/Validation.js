export default function validate(values) {
  let errors = {};

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
    errors.start_datetime = 'Start Date is required';
  }
  /////////////////////////// end_datetime //////////////////////////////////////
  if (!values.end_datetime) {
    errors.end_datetime = 'End Date is required';
  }

  return errors;
};
