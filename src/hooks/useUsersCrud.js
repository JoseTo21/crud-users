import axios from "axios";
import { useState } from "react";

const useUsersCrud = () => {
  const [users, setUsers] = useState();

  const url = "https://users-crud.academlo.tech/users/";

  const getAllUsers = () => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const createUsers = (data) => {
    axios
      .post(url, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const deleteUsers = (id) => {
    const urlDelete = `${url}${id}/`;
    axios
      .delete(urlDelete)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUsers = (id, data) => {
    const urlUpdate = `${url}${id}/`;
    axios
      .put(urlUpdate, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  return { users, getAllUsers, createUsers, deleteUsers, updateUsers };
};

export default useUsersCrud;
