
import { BrowserRouter } from "react-router-dom";
import RoutePage from "./app/core/routes/routes";
import Footer from "./app/core/components/footer/footer.component";
import Header from "./app/core/components/header/header.component";
import Login from "./app/modules/auth/login/login.module";
import useIsLoggedIn from "./app/shared/hooks/useIsLoggedIn";
import LandingPageLayout from "./app/core/pages/landing/landingPage.module";

function App() {

  const { itemState: isLoggedIn } = useIsLoggedIn()

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <Header />
          <RoutePage />
          <Footer />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <LandingPageLayout />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
