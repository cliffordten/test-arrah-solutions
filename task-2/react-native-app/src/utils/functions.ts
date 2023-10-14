import { Platform } from "react-native";
import { IByPlatform } from "./interfaces";

export const formatAmountWithSeparator = (
  amount: number,
  separator: string = ","
) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const formatAmount = (amount: number) => {
  const digits = amount.toString().length;
  if (digits >= 4 && digits <= 6) {
    return formatAmountWithSeparator(digits);
  } else if (digits >= 7 && digits <= 9) {
    return `${(amount / 1000000).toFixed(1)}M`;
  } else if (digits >= 10 && digits <= 12) {
    return `${(amount / 1000000000).toFixed(1)}B`;
  } else if (digits >= 13 && digits <= 15) {
    return `${(amount / 1000000000000).toFixed(1)}T`;
  } else {
    return amount.toString();
  }
};

export const formatAmountWithCurrency = (
  amount: number,
  currency: string
): string => `${formatAmount(amount)} ${currency}`;

export const byPlatform = ({ ios, android, data }: IByPlatform) => {
  const value = Platform.select({
    ios: {
      ios: ios || data,
    },
    android: {
      android: android || data,
    },
    default: {
      default: data,
    },
  });

  return value.android || value.ios || value.default;
};

export const makeArrayUnique = (array: any[], key: string = "id") => {
  const result: any[] = [];
  array.forEach((item) => {
    if (!result.find((ele) => ele[key] === item[key])) {
      result.push(item);
    }
  });
  return result;
};
