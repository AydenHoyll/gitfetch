import React, { useState } from "react";
import "./customInput.css";
import { BsSearch, BsGithub } from "react-icons/bs";
import axios from "axios";
type UserType = { login: string; bio: string; blog: string; company: string; email: string; followers: number; location: string; name: string; hireable: string; } | null;

const CustomInput = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [userData, setUserData] = useState<UserType>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound] = useState('not found')
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    try {
      const { data } = await axios.get<UserType>(
        `https://api.github.com/users/${userNameValue}`
      );
      console.log(data);
      setUserData(data);
      setUserNameValue("");
      setLoading(false);
      setError(false);
    } catch (err) {
      console.log(err);
      setUserNameValue("");
      setLoading(false);
      setError(true);
      setUserData(null)
    }
  };

  return (
    <div className="CustomInput">
      <h1 className='heading'>
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
        <div className='ErrorClass'>{error && "Пользователь не найден"}</div>
          <div className="outputStyles">
        <div>Login: {(userData && userData.login) || notFound}</div>
        <div>Bio: {(userData && userData.bio) || notFound}</div>
        <div>Email: {(userData && userData.email) || notFound}</div>
        <div>Blog: {(userData && userData.blog) || notFound}</div>
        <div>Company: {(userData && userData.company) || notFound}</div>
        <div>Location: {(userData && userData.location) || notFound}</div>
        <div>Followers: {(userData && userData.followers) || notFound}</div>
        <div>Name: {(userData && userData.name) || notFound}</div>
          </div>
      </div>
    </div>
  );
};

export default CustomInput;
