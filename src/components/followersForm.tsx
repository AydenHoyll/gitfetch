import React, { FC } from "react";
import { COMMON_ERROR_TEXT } from "../libs/lang";
import {UserType} from "../types/common";

type PropsType = {
  setFollowersShown: (name: boolean) => void;
  isFollowersShown: boolean;
  searchFollowersInput: string;
  setSearchFollowingInput: (name: string) => void;
  filteredFollowers: UserType[];
  showFollowersText: string;
};

export const FollowersForm: FC<PropsType> = ({
  setFollowersShown,
  isFollowersShown,
  searchFollowersInput,
  setSearchFollowingInput,
  filteredFollowers,
  showFollowersText,
}) => {
  return (
    <div className="output_block followers_block">
      <h2>Followers info:</h2>
      <div
        className="followersToggler"
        onClick={() => setFollowersShown(!isFollowersShown)}
      >
        {showFollowersText}
      </div>
      {isFollowersShown && (
        <input
          type="text"
          id="followersSearch"
          placeholder="Search followers"
          value={searchFollowersInput}
          onChange={(event) => setSearchFollowingInput(event.target.value)}
        />
      )}
      {filteredFollowers.length ? (
        <ol>
          {filteredFollowers.map((follower) => (
            <li>{follower.login}</li>
          ))}
        </ol>
      ) : (
        COMMON_ERROR_TEXT.NO_FOLLOWERS_FOUND
      )}
    </div>
  );
};
