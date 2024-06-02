const Validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Please Enter First Name";
  }

  if (!values.lastName) {
    errors.lastName = "Please Enter Last Name";
  }

  if (!values.email) {
    errors.email = "Please Enter Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Please Enter Password";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Please Enter Phone Number";
  } else if (values.phoneNumber.length !== 10) {
    errors.phoneNumber = "Invalid Phone Number";
  }

  if (!values.schoolName) {
    errors.schoolName = "Please Enter School Name";
  }

  if (!values.address) {
    errors.address = "Please Enter Address";
  }

  return errors;
};

export default Validate;
