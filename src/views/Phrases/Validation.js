export default function validate(values) {
    let errors = {};
   
  ///////////////////////////// pharse_category////////////////////////////////////
    if (!values.pharse_category) {
      errors.pharse_category = 'Pharse Category is required';
    } 
  //////////////////////////// phrase_english ///////////////////////////////////
    if (!values.phrase_english) {
      errors.phrase_english = 'English Phrase is required';
    }
  
  //////////////////////////// Camp Description ////////////////////////////////////
      if (!values.phrase_hindi) {
    errors.phrase_hindi = 'Hindi Phrase is required';
  } 
  
  
  /////////////////////////// description_english //////////////////////////////////////
  if (!values.description_english) {
    errors.description_english = 'English Description is required';
  }
   ///////////////////////////// description_hindi ////////////////////////////////////
   if (!values.description_hindi) {
    errors.description_hindi = 'Hindi Description is required';
  } 
  
 
  
  /////////////////////////// medical_phrases //////////////////////////////////////
  // if (!values.medical_phrases) {
  //   errors.medical_phrases = 'Medical Phrase is required';
  // }
  

    return errors;
  };
  