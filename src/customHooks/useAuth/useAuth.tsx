
// hooks/useAuth.ts
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token")
    console.log("token",token);
    setIsAuth(!!token);
  }, []);  

  return { isAuth };
};

export default useAuth;
