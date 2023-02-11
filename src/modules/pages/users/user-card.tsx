import { IUser } from "../../../model/user";
import { UserCardDetail } from "./user-card-detail";

type Props = {
  user: IUser;
  removeUser: (id: number) => void;
  handleUser: (id: number) => void;
  isActive: boolean;
};

export const UserCard = (props: Props) => {
  const { user, removeUser, handleUser, isActive } = props;

  return (
    <div className={`user-card ${isActive ? "active" : ""}`}>
      <div className="preview">
        <img src={user.image} alt="" />

        <h2>{user.firstName + " " + user.lastName}</h2>

        <button onClick={() => handleUser(user.id)}>
          {isActive ? "Chiudi" : "Dettaglio"}
        </button>
      </div>

      {isActive && <UserCardDetail user={props.user} removeUser={removeUser} />}
    </div>
  );
};
