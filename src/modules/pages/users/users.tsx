import { useEffect, useState } from "react";
import { userData } from "../../../data/users";
import { IUser } from "../../../model/user";
import { UserCard } from "./user-card";

export const Users = () => {
  const [userList, setUserList] = useState<IUser[] | null>(null);
  const [activeUser, setActiveUser] = useState<number | null>(null);

  const removeUser = (id: number) => {
    const newUserList = userList?.filter(user => user.id !== id);
    newUserList && setUserList(newUserList);
  };

  const handleUser = (id: number) => {
    setActiveUser(id === activeUser ? null : id);
  };

  useEffect(() => {
    setUserList(userData);
  }, []);

  return (
    <div className="users">
      <h1>Utenti</h1>
      <div className="users-list">
        {userList?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            removeUser={removeUser}
            handleUser={handleUser}
            isActive={user.id === activeUser}
          />
        ))}
      </div>
    </div>
  );
};
