import React from "react";
import Text, { ITextProps } from "./text";

interface IUserProps {
  name?: string;
  email?: string;
}

const User = ({ email, name }: IUserProps) => {
  return (
    <div className="flex items-center mr-8 mt-5">
      <div className="h-14 w-14 flex-shrink-0">
        <img
          className="h-full w-full rounded-full border"
          src="/user.png"
          alt=""
        />
      </div>
      <div className="ml-3">
        <Text value={name} />
        <Text value={email} variant="xsmall" />
      </div>
    </div>
  );
};

export default User;
