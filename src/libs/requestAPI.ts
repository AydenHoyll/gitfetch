import axios from "axios";
import { UserType } from "../types/common";

export type FetchUserDataSuccessType = {
  userData: UserType | null;
  followers: UserType[];
};

type FetchUserDataPropsType = {
  userName: string;
  onSuccess: (data: FetchUserDataSuccessType) => void;
  onError: () => void;
};

export const fetchUserData = async ({
  userName,
  onSuccess,
  onError,
}: FetchUserDataPropsType) => {
  const { data: userData, status: userRequestStatus } =
    await axios.get<UserType>(`https://api.github.com/users/${userName}`);

  if (userRequestStatus !== 200) {
    return onError();
  }

  // const { data: followersData } = await axios.get<UserType[]>(
  //   `https://api.github.com/users/${userName}/followers`
  // );

  onSuccess({ userData, followers: [] });
};
