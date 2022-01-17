import React, { FC } from "react";
import {UserType} from "../types/common";

type PropsType = {
  userData: UserType;
};

export const UserOutput: FC<PropsType> = ({ userData }) => {
  return (
    <div className="output_block user_block">
      <h2>User info:</h2>
      {Object.entries(userData)
        .slice(0, 3)
        .map(([key, value]) => (
          <div>
            {key}: {value || "not found"}
          </div>
        ))}
    </div>
  );
};
