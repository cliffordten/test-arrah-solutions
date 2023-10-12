import { createContext } from "react";

interface ISignupContext {
  step1: Record<string, any>;
  step2: Record<string, any>;
  step3: Record<string, any>;
  currentStep: number;
  handleFormData: (data: any) => void;
}

const handleFormData = (data: any) => {};

export const SignupContext = createContext<ISignupContext>({
  step1: {},
  step2: {},
  step3: {},
  currentStep: 1,
  handleFormData,
});
