import { Routes, Route } from "react-router-dom";
import { Homepage } from "./modules/pages/homepage/homepage";
import { NotFound } from "./modules/pages/not-found/not-found";
import { UserDetail } from "./modules/pages/users/user-details/user-details";
import { Users } from "./modules/pages/users/users";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users">
        <Route index element={<Users />} />
        <Route path=":id" element={<UserDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
