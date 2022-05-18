import { useEffect, useState } from "react";

export type LoginReturn = {
  itemState: Boolean;
  setItemState: (state: boolean) => void;
};

const useIsLoggedIn = (): LoginReturn => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setIsLoggedIn(true);
    // }, 3000);
  }, []);

  return { itemState: isLoggedIn, setItemState: setIsLoggedIn };
};

export default useIsLoggedIn;
