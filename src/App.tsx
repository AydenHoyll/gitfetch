import React, { useContext } from "react";

import { UserFetchForm } from "./components/usersForm";
import { UserOutput } from "./components/userOutput";
import { FollowersForm } from "./components/followersForm";
import { GlobalContext } from "./context/global";

const App = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div className="app">
      <UserFetchForm />

      {user?.data && (
        <div className="user_data_wrapper">
          <UserOutput />
          <FollowersForm />
        </div>
      )}
    </div>
  );
};

export default App;
