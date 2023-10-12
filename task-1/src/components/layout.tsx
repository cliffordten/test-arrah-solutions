import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Text from "./text";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "./button";
import { SignupContext } from "../context/signup.context";

type Props = {
  children?: ReactNode;
  title?: string;
};

const steps = [
  {
    number: 1,
    title: "Your Profile",
  },
  {
    number: 2,
    title: "Business Information",
  },
  {
    number: 3,
    title: "Additional Users",
  },
];

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [current, setCurrent] = useState(1);
  const [formData, setFormData] = useState({ step1: {}, step2: {}, step3: {} });
  console.log({ current });
  const handleFormData = (data: any) => {
    console.log({ data });
  };
  return (
    <SignupContext.Provider
      value={{
        ...formData,
        currentStep: current,
        handleFormData,
      }}
    >
      <div className="bg-signup_bg_svg min-h-screen bg-cover bg-no-repeat">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header className="max-w-[1600px] w-[95%] md:w-[70%] xl:w-[60%] mx-auto py-6">
          <div className="flex justify-between items-center">
            <div className="bg-white w-[100px] rounded-full">
              <img
                src="/logo.png"
                alt="app_logo"
                className="rounded-full p-0.5"
              />
            </div>
            <Text
              value="Create New Account"
              variant="large"
              className="text-white text-center"
            />
            <Text value="Contact Us" variant="title" className="text-white" />
          </div>
        </header>
        <div className="sm:!min-h-[65vh] my-4">
          <div className="w-[95%] md:w-[70%] xl:w-[60%] bg-white rounded-xl shadow-lg mx-auto min-h-[65vh] pb-16">
            <div className="flex justify-start items-center bg-wheat !rounded-xl relative">
              <div
                className={`absolute h-full bg-gradient-to-r from-secondaryLight to-secondary !rounded-tl-xl rounded-tr-xl sm:rounded-tr-full sm:rounded-br-full z-10 ${
                  current === 1
                    ? "w-full sm:w-1/3"
                    : current === 2
                    ? "w-full sm:w-2/3"
                    : current === 3
                    ? "w-full"
                    : "w-full sm:w-1/3"
                } transition-all ease-out duration-500`}
              />

              {steps.map((step) => (
                <div
                  key={step.title}
                  className={`${
                    step.number === current ? "flex" : " hidden sm:flex"
                  } w-full sm:w-1/3 flex justify-center items-center py-5 cursor-pointer sm:mr-5 pl-2 z-40`}
                  onClick={() => setCurrent(step.number)}
                >
                  <Text
                    value={step.number.toString()}
                    className={`${
                      step.number <= current
                        ? "text-secondaryLight bg-white"
                        : "text-white bg-darkLight"
                    } rounded-full w-[30px] h-[30px] flex justify-center items-center mr-4`}
                  />
                  <Text
                    value={step.title}
                    variant="title"
                    className={`${
                      step.number <= current ? "text-white" : "text-darkLight"
                    }`}
                  />
                </div>
              ))}
            </div>
            {children}

            <div className="w-full flex justify-center items-center mt-10">
              <Button
                onClick={() =>
                  setCurrent((prev) => (prev < 3 ? prev + 1 : prev))
                }
                textProps={{
                  value: "Complete Setup",
                }}
              />
            </div>
          </div>
        </div>
        <footer>
          <div className="w-[95%] md:w-[70%] xl:w-[60%] flex flex-col-reverse sm:flex-row justify-between items-center pt-10 mx-auto pb-16">
            <Button
              className="!bg-transparent !pl-0 mt-5 sm:mt-0"
              textProps={{
                value: "Back to Login",
                className: "!text-secondary",
                leftIcon: <AiOutlineLeft className="text-secondary text-xl" />,
              }}
            />
            <div className="flex justify-end items-center">
              {current > 1 ? (
                <Button
                  onClick={() => setCurrent((prev) => prev - 1)}
                  className="mr-6 bg-white border-primary border"
                  textProps={{
                    value: "Previous Step",
                    className: "text-primary",
                    leftIcon: (
                      <AiOutlineLeft className="text-primary text-xl" />
                    ),
                  }}
                />
              ) : undefined}
              <Button
                onClick={() =>
                  setCurrent((prev) => (prev < 3 ? prev + 1 : prev))
                }
                textProps={{
                  value: "Next Step",
                  rightIcon: <AiOutlineRight className="text-white text-xl" />,
                }}
              />
            </div>
          </div>
        </footer>
      </div>
    </SignupContext.Provider>
  );
};

export default Layout;
