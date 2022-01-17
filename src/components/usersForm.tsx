import React, { useContext } from "react";
import { BsGithub, BsSearch } from "react-icons/bs";
import { GlobalContext } from "../context/global";
import { fetchUserData, FetchUserDataSuccessType } from "../libs/requestAPI";

export const UserFetchForm = () => {
  const { userName, user, followers, methods } = useContext(GlobalContext);

  // Remove double loading & error -> concat
  const isLoading = user.isLoading || followers.isLoading;

  const onSuccess = (data: FetchUserDataSuccessType) => {
    methods?.setUser({ data: data.userData, error: "", isLoading: false });
    methods?.setUserName("");
  };

  const onError = () => {
    methods?.setUserName("");
    methods?.setUser({ data: null, error: "User not found", isLoading: false });
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchUserData({ userName, onError, onSuccess });
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
          value={userName}
          onChange={(event) => methods?.setUserName(event.target.value)}
        />
        <button type="submit" id="searchBtn" disabled={isLoading}>
          <BsSearch />
        </button>
      </form>
      <div>{isLoading && "loading..."}</div>
      {user.error && <div className="userNotFound">{user.error}</div>}
    </div>
  );
};
