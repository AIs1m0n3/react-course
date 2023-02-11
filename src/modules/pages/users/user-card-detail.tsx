import { IUser } from "../../../model/user";

type Props = {
  user: IUser;
  removeUser: (id: number) => void;
};

export const UserCardDetail = (props: Props) => {
  const { user, removeUser } = props;

  return (
    <div className="detail">
      <div>
        Età: <b>{user.age}</b>
      </div>
      <div>
        Lavoro: <b>{user.company.title}</b>
      </div>

      <button onClick={() => removeUser(user.id)}>Elimina</button>
    </div>
  );
};
