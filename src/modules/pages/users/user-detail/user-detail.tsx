import { useLocation, useParams } from "react-router-dom";

export const UserDetail = () => {
  const { id } = useParams();

  const { state } = useLocation();

  console.log(state);

  return <div>User detail with id: {id}</div>;
};
