import Link from "next/link";
import Layout from "../src/components/layout";
import Input from "../src/components/input";
import Text from "../src/components/text";
import { SignupContext } from "../src/context/signup.context";
import { useContext, useEffect, useState } from "react";
import SelectInput from "../src/components/select_input";
import { IoMdCheckmark } from "react-icons/io";
import { TiTimes } from "react-icons/ti";
import Button from "../src/components/button";
import { AiOutlineRight } from "react-icons/ai";
import { HiQuestionMarkCircle } from "react-icons/hi";
import Tooltip from "../src/components/tooltip";
import User from "../src/components/user";
import { useFormik } from "formik";
import {
  IFormikSteTwoSchema,
  IFormikStepOneSchema,
  IFormikStepThreeSchema,
} from "../src/utils/yup";

const StepOne = () => {
  const { step1, handleFormData, isSubmitting, setIsSubmitting } =
    useContext(SignupContext);

  const formik = useFormik({
    initialValues: {
      firstName: step1.firstName,
      lastName: step1.lastName,
      email: step1.email,
      phoneNumber: step1.phoneNumber,
      password: step1.password,
      cpassword: step1.cpassword,
    },
    enableReinitialize: true,
    validationSchema: IFormikStepOneSchema,
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit: async (data, { setSubmitting }) => {
      try {
        handleFormData(data, "step1");
        setSubmitting(false);
        setIsSubmitting(false);
      } catch (error: any) {
        setSubmitting(false);
        setIsSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (isSubmitting) {
      formik.submitForm();
      setIsSubmitting(false);
    }
    return () => {};
  }, [isSubmitting]);

  // useEffect(() => {
  //   if (Object.values(step1).length) {
  //     formik.setValues({ ...step1 } as any, true);
  //   }
  //   return () => {};
  // }, [step1]);

  return (
    <div>
      <Text
        value="Step 1"
        className="text-darkInput text-center !w-full mt-12 mb-1"
        containerClassName="w-full"
        variant="title"
      />
      <Text
        value="Your Profile"
        variant="large"
        className="text-center !w-full mb-3"
        containerClassName="w-full"
      />
      <Text
        value="Enter the login information for your account. You will be able to create additional users after registering"
        className="text-center !w-[80%] md:!w-[50%] mx-auto mb-8"
        containerClassName="w-full"
      />
      <div className="sm:flex justify-start items-center w-full">
        <Input
          label="First Name*"
          onChange={(firstName) => {
            formik.setValues((prev) => ({ ...prev, firstName }));
            formik.setErrors({});
          }}
          value={formik.initialValues.firstName as string}
          error={formik.errors.firstName as string}
          placeholder="Input Your First Name"
          className="mb-4 sm:mr-3 sm:w-1/2"
        />
        <Input
          label="Last Name*"
          onChange={(lastName) => {
            formik.setValues((prev) => ({ ...prev, lastName }));
            formik.setErrors({});
          }}
          value={formik.initialValues.lastName as string}
          error={formik.errors.lastName as string}
          placeholder="Input Your Last Name"
          className="mb-4 sm:ml-3 sm:w-1/2"
        />
      </div>
      <div className="sm:flex justify-start items-center w-full">
        <Input
          label="Email*"
          type="email"
          onChange={(email) => {
            formik.setValues((prev) => ({ ...prev, email }));
            formik.setErrors({});
          }}
          value={formik.initialValues.email as string}
          error={formik.errors.email as string}
          placeholder="Input Your Email"
          className="mb-4 sm:mr-3 sm:w-1/2"
        />
        <Input
          label="Phone Number*"
          onChange={(phoneNumber) => {
            formik.setValues((prev) => ({ ...prev, phoneNumber }));
            formik.setErrors({});
          }}
          value={formik.initialValues.phoneNumber as string}
          error={formik.errors.phoneNumber as string}
          placeholder="Input Your Phone Number"
          className="mb-4 sm:ml-3 sm:w-1/2"
        />
      </div>
      <div className="sm:flex justify-start items-center w-full">
        <Input
          label="Password*"
          type="password"
          onChange={(password) => {
            formik.setValues((prev) => ({ ...prev, password }));
            formik.setErrors({});
          }}
          value={formik.initialValues.password as string}
          error={formik.errors.password as string}
          placeholder="Create Password"
          className="mb-4 sm:mr-3 sm:w-1/2"
        />
        <Input
          label="Confirm Password*"
          onChange={(cpassword) => {
            formik.setValues((prev) => ({ ...prev, cpassword }));
            formik.setErrors({});
          }}
          type="password"
          value={formik.initialValues.cpassword as string}
          error={formik.errors.cpassword as string}
          placeholder="Confirm Your Password"
          className="mb-4 sm:ml-3 sm:w-1/2"
        />
      </div>
    </div>
  );
};

const StepTwo = () => {
  const { step2, handleFormData, isSubmitting, setIsSubmitting } =
    useContext(SignupContext);

  const formik = useFormik({
    initialValues: {
      brandName: step2.brandName,
      brandType: step2.brandType,
      streetAddress: step2.streetAddress,
      city: step2.city,
      zipCode: step2.zipCode,
      taxId: step2.taxId,
    },
    enableReinitialize: true,
    validationSchema: IFormikSteTwoSchema,
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit: async (data, { setSubmitting }) => {
      try {
        handleFormData(data, "step2");
        setSubmitting(false);
        setIsSubmitting(false);
      } catch (error: any) {
        setSubmitting(false);
        setIsSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (isSubmitting) {
      formik.submitForm();
      setIsSubmitting(false);
    }
    return () => {};
  }, [isSubmitting]);
  return (
    <div>
      <Text
        value="Step 2"
        className="text-darkInput text-center !w-full mt-12 mb-1"
        containerClassName="w-full"
        variant="title"
      />
      <Text
        value="Business Information"
        variant="large"
        className="text-center !w-full mb-3"
        containerClassName="w-full"
      />
      <Text
        value="Please, enter information about your company"
        className="text-center !w-[80%] md:!w-[50%] mx-auto mb-8"
        containerClassName="w-full"
      />
      <div>
        <Text
          value="General Information"
          className="uppercase text-secondary mb-2"
        />
        <div className="sm:flex justify-start items-center w-full">
          <Input
            label="Brand Name*"
            onChange={(brandName) => {
              formik.setValues((prev) => ({ ...prev, brandName }));
              formik.setErrors({});
            }}
            value={formik.initialValues.brandName as string}
            error={formik.errors.brandName as string}
            placeholder="Input Your Brand Name"
            className="mb-4 sm:mr-3 sm:w-1/2"
          />
          <SelectInput
            label="Brand type*"
            labelTextProps={{
              value: "Brand type*",
              rightIcon: (
                <Tooltip
                  tooltipText="Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less, National: Brands with distribution in 4 or more divisions or in more than 150 stores"
                  tooltipContent={
                    <HiQuestionMarkCircle className="text-dark text-xl cursor-pointer" />
                  }
                />
              ),
            }}
            onChange={(brandType) => {
              formik.setValues((prev) => ({ ...prev, brandType }));
              formik.setErrors({});
            }}
            value={formik.initialValues.brandType as string}
            error={formik.errors.brandType as string}
            data={[
              { key: "Local", value: "Local" },
              { key: "National", value: "National" },
            ]}
            placeholder="Select Type of Brand type"
            className="mb-4 sm:ml-3 sm:w-1/2"
          />
        </div>
        <div className="sm:flex justify-start items-center w-full">
          <Input
            label="Street Address*"
            onChange={(streetAddress) => {
              formik.setValues((prev) => ({ ...prev, streetAddress }));
              formik.setErrors({});
            }}
            value={formik.initialValues.streetAddress as string}
            error={formik.errors.streetAddress as string}
            placeholder="Input Your Street Address"
            className="mb-4 sm:mr-3 sm:w-1/2"
          />
          <Input
            label="City*"
            onChange={(city) => {
              formik.setValues((prev) => ({ ...prev, city }));
              formik.setErrors({});
            }}
            value={formik.initialValues.city as string}
            error={formik.errors.city as string}
            placeholder="Input City"
            className="mb-4 sm:ml-3 sm:w-1/2"
          />
        </div>
        <div className="sm:flex justify-start items-center w-full">
          <Input
            label="Zip Code*"
            onChange={(zipCode) => {
              formik.setValues((prev) => ({ ...prev, zipCode }));
              formik.setErrors({});
            }}
            value={formik.initialValues.zipCode as string}
            error={formik.errors.zipCode as string}
            placeholder="Input Zip Code"
            className="mb-4 sm:mr-3 sm:w-1/2"
          />
          <Input
            label="Tax Id Number*"
            onChange={(taxId) => {
              formik.setValues((prev) => ({ ...prev, taxId }));
              formik.setErrors({});
            }}
            value={formik.initialValues.taxId as string}
            error={formik.errors.taxId as string}
            placeholder="Input Your Tax Id Number"
            className="mb-4 sm:ml-3 sm:w-1/2"
          />
        </div>
      </div>
      <div className="my-5">
        <Text value="Documents" className="uppercase text-secondary mb-2" />
        <Text
          value="Once the following documents are signed, you'll be read to get started"
          className="mb-1"
        />
        <div className="sm:flex justify-start items-center w-full mb-4">
          <Text
            value="Electronically sign the agreement(s)"
            containerClassName="w-full justify-between border border-darkInput rounded-lg w-full p-2.5"
            rightIcon={<IoMdCheckmark className="text-xl text-emerald-500" />}
          />
          <Button
            className="bg-primaryLight100 ml-5 p-2.5 min-h-[42px] shadow-xl"
            textProps={{
              value: "",
              rightIcon: <AiOutlineRight className="text-white text-xl" />,
            }}
          />
        </div>
        <div className="sm:flex justify-start items-center w-full">
          <Text
            value="Non adult beverages Kroger market supplier waiver and release"
            containerClassName="w-full justify-between border border-darkInput rounded-lg w-full p-2.5"
            rightIcon={<TiTimes className="text-xl text-red-500" />}
          />
          <Button
            className="bg-primaryLight100 ml-5 p-2.5 min-h-[42px] shadow-xl"
            textProps={{
              value: "",
              rightIcon: <AiOutlineRight className="text-white text-xl" />,
            }}
          />
        </div>
      </div>

      <div className="mb-5">
        <Text
          value="Coi Pdf Upload"
          className="uppercase text-secondary mb-2"
        />
        <Text
          value="Once the following documents are signed, you'll be read to get started"
          className="mb-1"
        />
        <div className="sm:flex justify-start items-center w-full mb-4">
          <Text
            value="Electronically sign the agreement(s)"
            containerClassName="w-full justify-between border border-darkInput rounded-lg w-full p-2.5"
            rightIcon={<IoMdCheckmark className="text-xl text-emerald-500" />}
          />
          <Button
            className="bg-primaryLight100 ml-5 p-2.5 min-h-[42px] shadow-xl"
            textProps={{
              value: "",
              rightIcon: <AiOutlineRight className="text-white text-xl" />,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const StepThree = () => {
  const { step3, handleFormData, setIsSubmitting } = useContext(SignupContext);

  const [users, setUsers] = useState({});

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
    },
    enableReinitialize: true,
    validationSchema: IFormikStepThreeSchema,
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit: async (data, { setSubmitting }) => {
      try {
        setUsers({ ...step3, [data.email]: data });
        handleFormData({ ...step3, [data.email]: data }, "step3");
        setSubmitting(false);
        setIsSubmitting(false);
      } catch (error: any) {
        setSubmitting(false);
        setIsSubmitting(false);
      }
    },
  });

  useEffect(() => {
    setUsers(step3);
    return () => {};
  }, [step3]);

  return (
    <div>
      <Text
        value="Step 3"
        className="text-darkInput text-center !w-full mt-12 mb-1"
        containerClassName="w-full"
        variant="title"
      />
      <Text
        value="Additional Users"
        variant="large"
        className="text-center !w-full mb-3"
        containerClassName="w-full"
      />
      <Text
        value="Add information about additional users for your account. Invitations will be sent to them"
        className="text-center !w-[80%] md:!w-[50%] mx-auto mb-8"
        containerClassName="w-full"
      />
      <div className="sm:flex justify-start items-center w-full">
        <Input
          label="Full Name*"
          onChange={(fullName) => {
            formik.setValues((prev) => ({ ...prev, fullName }));
            formik.setErrors({});
          }}
          value={formik.initialValues.fullName as string}
          error={formik.errors.fullName as string}
          placeholder="Input Your First Name"
          className="mb-4 sm:mr-3 sm:w-2/5"
        />
        <Input
          label="Email*"
          type="email"
          onChange={(email) => {
            formik.setValues((prev) => ({ ...prev, email }));
            formik.setErrors({});
          }}
          value={formik.initialValues.email as string}
          error={formik.errors.email as string}
          placeholder="Input Your Email"
          className="mb-4 sm:mr-3 sm:w-2/5"
        />
        <Button
          onClick={() => formik.submitForm()}
          className="mt-4 sm:w-1/5 border-primary border bg-white"
          textProps={{
            value: "Invite User",
            className: "text-primary",
          }}
        />
      </div>
      <div className="flex flex-wrap justify-start items-center">
        {Object.values(users).map((user: any) => (
          <User name={user.fullName} email={user.email} key={user.email} />
        ))}
      </div>
    </div>
  );
};

const RenderCurrentStep = () => {
  const { currentStep } = useContext(SignupContext);

  switch (currentStep) {
    case 1:
      return <StepOne />;

    case 2:
      return <StepTwo />;

    case 3:
      return <StepThree />;

    default:
      return <StepOne />;
  }
};

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <RenderCurrentStep />
      </div>
    </Layout>
  );
};

export default IndexPage;
