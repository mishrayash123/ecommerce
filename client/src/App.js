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
import TRACKORDER from "./pages/TRACKORDER";
import PaymentPage from "./pages/PaymentPage";
import AFTERADDRESSPAGE from "./pages/AFTERADDRESSPAGE";
import PROFILE from "./pages/PROFILE";
import Dashboard6 from "./pages/Dashboard6";
import Dashboard5 from "./pages/Dashboard5";
import Dashboard4 from "./pages/Dashboard4";
import Dashboard3 from "./pages/Dashboard3";
import TRACKORDER1 from "./pages/TRACKORDER1";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard1 from "./pages/Dashboard1";
import PaymentPage1 from "./pages/PaymentPage1";

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
        case "/payment-page1":
        title = "";
        metaDescription = "";
        break;
        case "/payment-page":
          title = "";
          metaDescription = "";
          break;
      case "/after-address-page":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard3":
        title = "";
        metaDescription = "";
        break;
      case "/track-order":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard4":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard5":
        title = "";
        metaDescription = "";
        break;
      case "/payment-page":
        title = "";
        metaDescription = "";
        break;
        case "/trackorder":
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
      <Route path="/trackorder" element={<TRACKORDER />} />
      <Route path="/payment-page1" element={<PaymentPage />} />
      <Route path="/after-address-page" element={<AFTERADDRESSPAGE />} />
      <Route path="/profile" element={<PROFILE />} />
      <Route path="/dashboard" element={<Dashboard6 />} />
      <Route path="/dashboard1" element={<Dashboard5 />} />
      <Route path="/dashboard2" element={<Dashboard4 />} />
      <Route path="/dashboard3" element={<Dashboard3 />} />
      <Route path="/track-order" element={<TRACKORDER1 />} />
      <Route path="/dashboard4" element={<Dashboard2 />} />
      <Route path="/dashboard5" element={<Dashboard1 />} />
      <Route path="/payment-page" element={<PaymentPage1 />} />
    </Routes>
  );
}
export default App;
