import React from "react";
import axios from "axios";
import { UserType } from "../components/customInput";
type FetchUserByNameTypes = {
  userNameValue: string | null;
  onSuccess: (data: UserType) => void;
  onError: () => void;
  };
type FetchFollowersTypes = {
  userNameValue: string | null;
  onFsuccess: (data: UserType[]) => void;
}

export const fetchUserByName = async ({
  userNameValue,
  onSuccess,
  onError,
}: FetchUserByNameTypes) => {
  try {
    const { data } = await axios.get<UserType>(
      `https://api.github.com/users/${userNameValue}`
    );
    onSuccess(data);
  } catch (err) {
    onError();
  }
};
export const fetchFollowers = async ({userNameValue,
                                       onFsuccess,
                                     }:FetchFollowersTypes ) => {
    const {data} = await axios.get<UserType[]>(`https://api.github.com/users/${userNameValue}/followers`)
    onFsuccess(data)
console.log(data)};

