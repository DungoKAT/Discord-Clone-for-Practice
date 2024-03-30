import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const Content = () => {
    return (
        <div className="content flex flex-grow w-2/4 h-full">
            <Sidebar />
            <Main />
        </div>
    );
};

export default Content;
