import { Route, Routes } from "react-router-dom";
import { Homepage } from "./modules/pages/homepage/homepage";
import { NotFound } from "./modules/pages/not-found/not-found";
import { NewUser } from "./modules/pages/users/new-user/new-user";
import { UserDetail } from "./modules/pages/users/user-detail/user-detail";
import { Users } from "./modules/pages/users/users";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users">
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/new" element={<NewUser />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
