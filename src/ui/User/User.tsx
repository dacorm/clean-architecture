import {useNavigate} from "react-router";
import {useUserStorage} from "../../services/storageAdapter";
import {Buy} from "../Buy";
import {Cart} from "../Cart";
import {Orders} from "../Orders";
import {Profile} from "../Profile";

export function User() {
  const { user } = useUserStorage();
  const navigate = useNavigate();
  if (!user) navigate('/auth');

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}
