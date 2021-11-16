const validation =(value) => {
  let errors ={};
  if(!value.fullname){
    errors.fullname="Name is required."
  }
  if(!value.email){
    errors.email="Email is required."
  } else if(!/@$%^&/.test(value.email)){
    errors.email="Email is invalid"
  }
  if(!value.account){
    errors.account="Account is required."

  }
  if(!value.ifsc){
    errors.ifsc="IFSC is required."
  }

  return errors;
}
export default validation;
