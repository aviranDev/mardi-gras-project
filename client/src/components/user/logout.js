import { useEffect } from "react";
import userService from "../../services/userService";


function Logout() {

  useEffect(() => {
    userService.logOut();
    window.location = "/";
  }, [])

  return null;
}

export default Logout;
