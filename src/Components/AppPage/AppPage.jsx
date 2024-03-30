import SideNavbar from "./SideNavbar/SideNavbar";
import Content from "./Content/Content";

const AppPage = () => {
    return (
        <div className="w-full h-full flex">
            <SideNavbar />
            <Content />
        </div>
    );
};

export default AppPage;
