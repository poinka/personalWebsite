import ReactDOM from "react-dom/client";
import MainPage from "./MainPage";
import './style.css'

const mainPage = ReactDOM.createRoot(document.getElementById("mainPage") as HTMLElement);
mainPage.render(<MainPage />);