import React, { FC, useContext } from "react";
import { GlobalContext } from "../context/global";

export const UserOutput: FC = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div className="output_block user_block">
      <h2>User info:</h2>
      {Object.entries(user.data || {})
        .slice(0, 3)
        .map(([key, value]) => (
          <div key={key}>
            {key}: {value || "not found"}
          </div>
        ))}
    </div>
  );
};
