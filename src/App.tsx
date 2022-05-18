import { BrowserRouter } from "react-router-dom";
import useIsLoggedIn from "./app/shared/hooks/useIsLoggedIn";
import RoutePage from "core/routes/routes";
import Header from "core/components/header/header.component";
import Footer from "core/components/footer/footer.component";
import LandingPageLayout from "core/pages/landing/landingPage.module";

function App() {
  const { itemState: isLoggedIn } = useIsLoggedIn();

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          {/* <Header /> */}
          <RoutePage />
          {/* <Footer /> */}
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
