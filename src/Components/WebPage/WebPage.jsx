import MainNavbar from "./Navbar/MainNavbar";
import MainFooter from "./Footer/MainFooter";
// import HomePage from "./ContentPage/Home/HomePage";
import { Outlet } from "react-router-dom";

const WebPage = () => {
    return (
        <div className="w-full h-full relative flex flex-col overflow-x-hidden overflow-y-scroll">
            <MainNavbar />
            <Outlet />
            <MainFooter />
        </div>
    );
};

export default WebPage;
