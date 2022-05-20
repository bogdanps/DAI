import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import {} from "react-router-dom";
import ReportingPage from "./screens/ReportingPage/ReportingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => (
  <BrowserRouter>
    <Header></Header>
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="reporting" element={<ReportingPage />}></Route>
        <Route path="login" element={<LoginScreen />}></Route>
        <Route path="register" element={<RegisterScreen />}></Route>
      </Routes>
    </main>
    <Footer></Footer>
  </BrowserRouter>
);

export default App;
