import SideNavbar from "./Components/SideNavbar/SideNavbar";
import Content from "./Components/Content/Content";

import "./App.css";

function App() {
    return (
        <>
            <div className="App flex w-screen h-screen bg-transparent overflow-hidden">
                <SideNavbar />
                <Content />
            </div>
        </>
    );
}

export default App;
