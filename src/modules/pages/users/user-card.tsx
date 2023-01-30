import { IUser } from "../../../model/user";
import { Link } from "react-router-dom";

type Props = {
  user: IUser;
};

export const UserCard = (props: Props) => {
  const { user } = props;

  return (
    <div className={`user-card `}>
      <div className="preview">
        <img src={user.image} alt="" />
        <h2>{user.firstName + " " + user.lastName}</h2>

        <Link to={`/users/${user.id}`} state={user}>
          Dettaglio
        </Link>
      </div>
    </div>
  );
};
