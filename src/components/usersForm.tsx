import React, { useContext, useState } from "react";
import { BsGithub, BsSearch } from "react-icons/bs";
import { GlobalContext } from "../context/global";
import { fetchUserData, FetchUserDataSuccessType } from "../libs/requestAPI";

export const UserFetchForm = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const { user, methods } = useContext(GlobalContext);

  const onSuccess = (data: FetchUserDataSuccessType) => {
    methods?.setUser({
      data: data.userData,
      followers: data.followers,
      error: "",
      isLoading: false,
    });
    setUserNameInput("");
  };

  const onError = () => {
    setUserNameInput("");
    methods?.setUser({
      followers: [],
      error: "User not found",
      isLoading: false,
    });
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchUserData({ userName: userNameInput, onError, onSuccess });
  };

  return (
    <div className="input_search">
      <h1 className="heading">
        Git User Search <BsGithub />
      </h1>

      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          id="searchUsersInput"
          placeholder="Search Git Users..."
          value={userNameInput}
          onChange={(event) => setUserNameInput(event.target.value)}
        />
        <button type="submit" id="searchBtn" disabled={user.isLoading}>
          <BsSearch />
        </button>
      </form>

      <div>{user.isLoading && "loading..."}</div>

      {user.error && <div className="userNotFound">{user.error}</div>}
    </div>
  );
};
