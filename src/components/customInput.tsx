import React, { useState } from "react";
import "./customInput.css";
import { BsSearch, BsGithub } from "react-icons/bs";
import axios from "axios";
import { fetchFollowers, fetchUserByName } from "../libs/requestAPI";

export type UserType = {
  login: string;
  bio: string;
  blog: string;
  company: string;
  email: string;
  followers: number;
  location: string;
  name: string;
  hireable: string;
};

const CustomInput = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [userData, setUserData] = useState<UserType | null>(null);
  const [followersData, setFollowersData] = useState<UserType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const notFound = "not found";

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const onSuccess = (data: UserType) => {
      setUserData(data);
      setUserNameValue("");
      setLoading(false);
      setError(false);
    };
    const onError = () => {
      setUserNameValue("");
      setLoading(false);
      setError(true);
      setUserData(null);
    };
    const onFsuccess = (data: UserType[]) => {
      setFollowersData(data);
      setError(false);
    };

    await fetchUserByName({ userNameValue, onError, onSuccess });
    await fetchFollowers({ userNameValue, onFsuccess });
    console.log(followersData);
  };

  return (
    <div className="CustomInput">
      <h1 className="heading">
        Git User Search <BsGithub />
      </h1>
      <div className="innerWrapper">
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            id="inputId"
            placeholder="search..."
            value={userNameValue}
            onChange={(event) => setUserNameValue(event.target.value)}
          />
          <button type="submit" id="searchBtn" disabled={loading}>
            <BsSearch />
          </button>
        </form>
        <div>{loading && "loading..."}</div>
        <div className="ErrorClass">{error && "Пользователь не найден"}</div>
        {userData && (
          <div className="outputStyles">
            <div>Login: {userData.login || notFound}</div>
            <div>Followers: {userData.followers || notFound}</div>
            <div>Name: {userData.name || notFound}</div>
          </div>
        )}
        <div className="followers">
          {followersData && (
            <ol>
              {followersData.map((follower) => (
                <li>{follower.login}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
