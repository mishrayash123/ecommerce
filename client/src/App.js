import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MenHomePage from "./pages/MenHomePage";
import ReadymadeTshirtMENPage from "./pages/ReadymadeTshirtMENPage";
import ReadymadeTshirtWOMENPag from "./pages/ReadymadeTshirtWOMENPag";
import ReadymadeKIDSPage from "./pages/ReadymadeKIDSPage";
import ReadymadeLowerPage from "./pages/ReadymadeLowerPage";
import UndergarmentsMenWomen from "./pages/UndergarmentsMenWomen";
import UndergarmentsMenWomen1 from "./pages/UndergarmentsMenWomen1";
import ThermalMEN from "./pages/ThermalMEN";
import ThermalWOMEN from "./pages/ThermalWOMEN";
import AccessoriesHanky from "./pages/AccessoriesHanky";
import AccessoriesSocks from "./pages/AccessoriesSocks";
import AccessoriesArmSleeves from "./pages/AccessoriesArmSleeves";
import WISHLISTPAGE from "./pages/WISHLISTPAGE";
import WISHLISTPAGE1 from "./pages/WISHLISTPAGE1";
import MATERIALPAGE from "./pages/MATERIALPAGE";
import CARTPAGE from "./pages/CARTPAGE";
import CARTPAGE1 from "./pages/CARTPAGE1";
import LOGIN from "./pages/LOGIN";
import LOGIN1 from "./pages/LOGIN1";
import Frame from "./pages/Frame";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/readymade-tshirt-men-page":
        title = "";
        metaDescription = "";
        break;
      case "/readymade-tshirt-women-page":
        title = "";
        metaDescription = "";
        break;
      case "/readymade-kids-page":
        title = "";
        metaDescription = "";
        break;
      case "/readymade-lower-page":
        title = "";
        metaDescription = "";
        break;
      case "/undergarments-men-women":
        title = "";
        metaDescription = "";
        break;
      case "/undergarments-men-women1":
        title = "";
        metaDescription = "";
        break;
      case "/thermal-men":
        title = "";
        metaDescription = "";
        break;
      case "/thermal-women":
        title = "";
        metaDescription = "";
        break;
      case "/accessories-hanky":
        title = "";
        metaDescription = "";
        break;
      case "/accessories-socks":
        title = "";
        metaDescription = "";
        break;
      case "/accessories-arm-sleeves":
        title = "";
        metaDescription = "";
        break;
      case "/wishlist-page":
        title = "";
        metaDescription = "";
        break;
      case "/wishlist-page1":
        title = "";
        metaDescription = "";
        break;
      case "/material-page":
        title = "";
        metaDescription = "";
        break;
      case "/cart-page":
        title = "";
        metaDescription = "";
        break;
      case "/cart-page1":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-80":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MenHomePage />} />
      <Route
        path="/readymade-tshirt-men-page"
        element={<ReadymadeTshirtMENPage />}
      />
      <Route
        path="/readymade-tshirt-women-page"
        element={<ReadymadeTshirtWOMENPag />}
      />
      <Route path="/readymade-kids-page" element={<ReadymadeKIDSPage />} />
      <Route path="/readymade-lower-page" element={<ReadymadeLowerPage />} />
      <Route
        path="/undergarments-men-women"
        element={<UndergarmentsMenWomen />}
      />
      <Route
        path="/undergarments-men-women1"
        element={<UndergarmentsMenWomen1 />}
      />
      <Route path="/thermal-men" element={<ThermalMEN />} />
      <Route path="/thermal-women" element={<ThermalWOMEN />} />
      <Route path="/accessories-hanky" element={<AccessoriesHanky />} />
      <Route path="/accessories-socks" element={<AccessoriesSocks />} />
      <Route
        path="/accessories-arm-sleeves"
        element={<AccessoriesArmSleeves />}
      />
      <Route path="/wishlist-page" element={<WISHLISTPAGE />} />
      <Route path="/wishlist-page1" element={<WISHLISTPAGE1 />} />
      <Route path="/material-page" element={<MATERIALPAGE />} />
      <Route path="/cart-page" element={<CARTPAGE />} />
      <Route path="/cart-page1" element={<CARTPAGE1 />} />
      <Route path="/login" element={<LOGIN />} />
      <Route path="/login1" element={<LOGIN1 />} />
      <Route path="/frame-80" element={<Frame />} />
    </Routes>
  );
}
export default App;
