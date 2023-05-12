import { useEffect, useState } from "react";
import "./App.css";
import useUsersCrud from "./hooks/useUsersCrud";
import UsersCard from "./components/usersCard";
import FormUsers from "./components/FormUsers";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [formClose, setformClose] = useState(true);

  const { users, getAllUsers, createUsers, deleteUsers, updateUsers } =
    useUsersCrud();

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpenForm = () => {
    setformClose(false);
  };

  return (
    <div className="App">
      <header className="app__header">
        <h1 className="app__title">CRUD USERS</h1>
        <button onClick={handleOpenForm} className="app__btn-header">
          Create New User
        </button>
      </header>

      <FormUsers
        createUsers={createUsers}
        updateInfo={updateInfo}
        updateUsers={updateUsers}
        setUpdateInfo={setUpdateInfo}
        setformClose={setformClose}
        formClose={formClose}
      />
      <div className="app__user-container">
        {users?.map((user) => (
          <UsersCard
            key={user.id}
            user={user}
            deleteUsers={deleteUsers}
            setUpdateInfo={setUpdateInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
