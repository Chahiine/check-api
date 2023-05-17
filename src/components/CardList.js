import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SingleCard from "./SingleCard";
import { setUsers } from "../app/userSlice";
const CardList = () => {
  const lists = useSelector((state) => state.Hotels.list);
  const users = useSelector((state) => state.User.list);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => dispatch(setUsers(response.data)))
      .catch((error) => console.log(error));
  }, []);
  console.log(users);
  return (
    <div>
      <h1>List of Hotels</h1>
      {users.map((item, index) => {
        return <SingleCard Person={item} key={index} />;
      })}
    </div>
  );
};

export default CardList;
