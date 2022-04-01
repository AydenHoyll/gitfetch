import React, { FC, useContext, useEffect, useState } from "react";
import { COMMON_ERROR_TEXT } from "../libs/lang";
import { UserType } from "../types/common";
import { GlobalContext } from "../context/global";

export const FollowersForm: FC = () => {
  const {
    user: { followers },
  } = useContext(GlobalContext);

  const [filteredFollowers, setFilteredFollowers] = useState<UserType[]>([]);
  const [searchFollowersInput, setSearchFollowingInput] = useState("");
  const [isFollowersShown, setFollowersShown] = useState(false);
  const showFollowersText = isFollowersShown ? "Скрыть" : "Показать";

  useEffect(() => {
    if (!followers.length) return;

    const filtered = followers.filter((word) =>
      word.login.toLowerCase().includes(searchFollowersInput.toLowerCase())
    );

    setFilteredFollowers(filtered);
  }, [searchFollowersInput, followers]);

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
            <li key={follower.login}>{follower.login}</li>
          ))}
        </ol>
      ) : (
        COMMON_ERROR_TEXT.NO_FOLLOWERS_FOUND
      )}
    </div>
  );
};
