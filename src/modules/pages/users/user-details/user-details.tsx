import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { API_URL } from "../../../../contants";
import { IUser } from "../../../../model/user";

type TCurrentUserState = {
  user: IUser | null;
  loading: boolean;
  error: boolean;
};

export const UserDetail = () => {
  const params = useParams();
  const location = useLocation();

  const id = params.id;

  const user: IUser = location.state;

  const [currentUserState, setCurrentUserState] = useState<TCurrentUserState>({
    user,
    loading: false,
    error: false,
  });

  const fetchUserById = async () => {
    setCurrentUserState({
      ...currentUserState,
      loading: true,
    });

    try {
      const res = await axios.get(`${API_URL}/users/${id}`);

      setCurrentUserState({
        ...currentUserState,
        loading: false,
        user: res.data,
      });
    } catch (e) {
      setCurrentUserState({
        ...currentUserState,
        loading: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    !user && fetchUserById();
  }, []);

  return (
    <div className="user-details">
      {currentUserState.loading && "Loading"}
      {currentUserState.error && "Error loading "}
      {currentUserState.user &&
        `Viewing  user with id ${currentUserState.user.id} `}
    </div>
  );
};
