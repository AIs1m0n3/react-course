import { IUser } from "../../../model/user";

type Props = {
  user: IUser;
  removeUser: (id: number) => void;
};

export const UserCardDetail = (props: Props) => {
  const { id, age, job } = props.user;
  const { removeUser } = props;

  return (
    <div className="detail">
      <div>
        Età: <b>{age}</b>
      </div>
      <div>
        Lavoro: <b>{job}</b>
      </div>

      <button onClick={() => removeUser(id)}>Elimina</button>
    </div>
  );
};
