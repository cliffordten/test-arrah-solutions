import { createContext } from "react";

interface ISignupContext {
  step1: Record<string, any>;
  step2: Record<string, any>;
  step3: Record<string, any>;
  currentStep: number;
  isSubmitting: boolean;
  setIsSubmitting(isSubmitting: boolean): void;
  handleFormData: (data: any, step: string) => void;
}

const handleFormData = (data: any, step: string) => {};
const setIsSubmitting = (isSubmitting: boolean) => {};

export const SignupContext = createContext<ISignupContext>({
  step1: {},
  step2: {},
  step3: {},
  isSubmitting: false,
  currentStep: 1,
  handleFormData,
  setIsSubmitting,
});
