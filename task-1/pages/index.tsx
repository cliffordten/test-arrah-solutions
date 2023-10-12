import Link from "next/link";
import Layout from "../src/components/layout";
import Input from "../src/components/input";
import Text from "../src/components/text";
import { SignupContext } from "../src/context/signup.context";
import { useContext } from "react";
import SelectInput from "../src/components/select_input";
import { IoMdCheckmark } from "react-icons/io";
import { TiTimes } from "react-icons/ti";
import Button from "../src/components/button";
import { AiOutlineRight } from "react-icons/ai";
import { HiQuestionMarkCircle } from "react-icons/hi";
import Tooltip from "../src/components/tooltip";
import User from "../src/components/user";

const StepOne = () => {
  const { currentStep } = useContext(SignupContext);

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
          // error="required"
          placeholder="Input Your First Name"
          className="mb-4 sm:mr-3 sm:w-1/2"
        />
        <Input
          label="Last Name*"
          // error="required"
          placeholder="Input Your Last Name"
          className="mb-4 sm:ml-3 sm:w-1/2"
        />
      </div>
      <div className="sm:flex justify-start items-center w-full">
        <Input
          label="Email*"
          type="email"
          // error="required"
          placeholder="Input Your Email"
          className="mb-4 sm:mr-3 sm:w-1/2"
        />
        <Input
          label="Phone Number*"
          // error="required"
          placeholder="Input Your Phone Number"
          className="mb-4 sm:ml-3 sm:w-1/2"
        />
      </div>
      <div className="sm:flex justify-start items-center w-full">
        <Input
          label="Password*"
          // error="required"
          placeholder="Create Password"
          className="mb-4 sm:mr-3 sm:w-1/2"
        />
        <Input
          label="Confirm Password*"
          // error="required"
          placeholder="Confirm Your Password"
          className="mb-4 sm:ml-3 sm:w-1/2"
        />
      </div>
    </div>
  );
};

const StepTwo = () => {
  const { currentStep } = useContext(SignupContext);

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
            // error="required"
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
            // error="required"
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
            // error="required"
            placeholder="Input Your Street Address"
            className="mb-4 sm:mr-3 sm:w-1/2"
          />
          <Input
            label="City*"
            // error="required"
            placeholder="Input City"
            className="mb-4 sm:ml-3 sm:w-1/2"
          />
        </div>
        <div className="sm:flex justify-start items-center w-full">
          <Input
            label="Zip Code*"
            // error="required"
            placeholder="Input Zip Code"
            className="mb-4 sm:mr-3 sm:w-1/2"
          />
          <Input
            label="Tax Id Number*"
            // error="required"
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
  const { currentStep } = useContext(SignupContext);

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
          // error="required"
          placeholder="Input Your First Name"
          className="mb-4 sm:mr-3 sm:w-2/5"
        />
        <Input
          label="Email*"
          type="email"
          // error="required"
          placeholder="Input Your Email"
          className="mb-4 sm:mr-3 sm:w-2/5"
        />
        <Button
          // onClick={}
          className="mt-4 sm:w-1/5 border-primary border bg-white"
          textProps={{
            value: "Invite User",
            className: "text-primary",
          }}
        />
      </div>
      <div className="flex flex-wrap justify-start items-center">
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
        <User name="Besique Monroe" email="besique@gmail.com" />
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
