import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../contants";
import { IUser, IUserResponse } from "../../../model/user";
import { UserCard } from "./user-card";

type TUserState = {
  loading: boolean;
  error: boolean;
  users: IUser[] | null;
};

export const Users = () => {
  const [userState, setUserState] = useState<TUserState>({
    loading: false,
    error: false,
    users: null,
  });

  const fetchUsers = async () => {
    setUserState({
      ...userState,
      loading: true,
    });

    try {
      const res = await axios.get(`${API_URL}/users`);
      const data: IUserResponse = res.data;
      setUserState({
        ...userState,
        users: data.users,
        loading: false,
      });
    } catch (e) {
      setUserState({
        ...userState,
        loading: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users">
      <h1>Utenti</h1>
      <div className="users-list">
        {userState.loading && "Loading"}
        {userState.error && "Error"}

        {userState.users?.length === 0 && "No users found"}
        {userState.users?.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
