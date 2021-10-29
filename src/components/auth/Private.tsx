import { Login } from "components/auth/Login";
import { ProfileProps } from "components/auth/Profile";
type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};
export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Aman" />;
  } else {
    return <Login />;
  }
};
