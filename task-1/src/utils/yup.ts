import * as Yup from "yup";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const IFormikStepOneSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  lastName: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  phoneNumber: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  email: Yup.string().email("invalid email").required("this field is required"),
  password: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .matches(passwordRegex, "password is not strong enough")
    .required("this field is required"),
  cpassword: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .oneOf([Yup.ref("password"), undefined], "password does not match")
    .required("this field is required"),
});

export const IFormikSteTwoSchema = Yup.object().shape({
  brandName: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  brandType: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  streetAddress: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  city: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  zipCode: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  taxId: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
});

export const IFormikStepThreeSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "value is too short")
    .max(50, "value is too long")
    .required("this field is required"),
  email: Yup.string().email("invalid email").required("this field is required"),
});
