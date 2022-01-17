import React, { useEffect, useState } from "react";
import "./app.css";
import { fetchFollowers, fetchUserByName } from "./libs/requestAPI";
import {UserFetchForm, UsersForm} from "./components/usersForm";
import { UserOutput } from "./components/userOutput";
import { FollowersForm } from "./components/followersForm";
import { UserType } from "./types/common";

const App = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [userData, setUserData] = useState<UserType | null>(null);
  const [followersData, setFollowersData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredFollowers, setFilteredFollowers] = useState<UserType[]>([]);
  const [searchFollowersInput, setSearchFollowingInput] = useState("");
  const [isFollowersShown, setFollowersShown] = useState(false);
  const showFollowersText = isFollowersShown ? "Скрыть" : "Показать";
  const [isFollowers, setIsFollowers] = useState(false);

  useEffect(() => {
    if (!followersData.length) return;

    const filtered = followersData.filter((word) =>
      word.login.toLowerCase().includes(searchFollowersInput.toLowerCase())
    );

    setFilteredFollowers(filtered);
  }, [searchFollowersInput, followersData]);

  return (
      <div className="app">
        <UserFetchForm />

        {userData && isFollowers && (
          <div className="container">
            <UserOutput userData={userData} />
            <FollowersForm
              filteredFollowers={filteredFollowers}
              isFollowersShown={isFollowersShown}
              searchFollowersInput={searchFollowersInput}
              setFollowersShown={setFollowersShown}
              setSearchFollowingInput={setSearchFollowingInput}
              showFollowersText={showFollowersText}
            />
          </div>
        )}
      </div>
  );
};

export default App;
