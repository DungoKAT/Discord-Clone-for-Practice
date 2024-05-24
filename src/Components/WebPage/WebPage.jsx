import { useRouteError } from "react-router-dom";
import MainNavbar from "./Navbar/MainNavbar";
import MainFooter from "./Footer/MainFooter";
import { Outlet } from "react-router-dom";
import WrongTurnPage from "./WrongTurnPage";

const WebPage = () => {
    const error = useRouteError();
    return (
        <div
            className="w-full h-full relative flex flex-col overflow-x-hidden overflow-y-scroll"
            id="web-page"
        >
            <MainNavbar />
            {error ? <WrongTurnPage /> : <Outlet />}
            <MainFooter />
        </div>
    );
};

export default WebPage;
