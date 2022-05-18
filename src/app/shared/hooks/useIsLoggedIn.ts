import { useEffect, useState } from "react";

export type LoginReturn = {
  itemState: Boolean;
  setItemState: (state: boolean) => void;
};

const useIsLoggedIn = (): LoginReturn => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    setIsLoggedIn(false);
    // }, 3000);
  }, []);

  return { itemState: isLoggedIn, setItemState: setIsLoggedIn };
};

export default useIsLoggedIn;
