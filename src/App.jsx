import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebPage from "./Components/WebPage/WebPage.jsx";
import HomePage from "./Components/WebPage/ContentPage/Home/HomePage.jsx";
import DownloadPage from "./Components/WebPage/ContentPage/Download/DownloadPage.jsx";
import NitroPage from "./Components/WebPage/ContentPage/Nitro/NitroPage.jsx";
import DiscoverPage from "./Components/WebPage/ContentPage/Discover/DiscoverPage.jsx";
import SafetyPage from "./Components/WebPage/ContentPage/Safety/SafetyPage.jsx";
import SafetyLibraryPage from "./Components/WebPage/ContentPage/Safety/HubPage/SafetyLibrary.jsx";
import SafetyPrivacyPage from "./Components/WebPage/ContentPage/Safety/HubPage/SafetyPrivacy.jsx";
import CareersPage from "./Components/WebPage/ContentPage/Careers/CareersPage.jsx";
import AppPage from "./Components/AppPage/AppPage.jsx";
import ServerPreview from "./Components/WebPage/ContentPage/Discover/ServerPreview.jsx";
// import SideNavbar from "./Components/SideNavbar/SideNavbar";
// import Content from "./Components/Content/Content";

import "./App.css";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <WebPage />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/download",
                    element: <DownloadPage />,
                },
                {
                    path: "/nitro",
                    element: <NitroPage />,
                },
                {
                    path: "/servers",
                    element: <DiscoverPage />,
                },
                {
                    path: "/servers/server-preview",
                    element: <ServerPreview />,
                },
                {
                    path: "/safety",
                    element: <SafetyPage />,
                },
                {
                    path: "/safety-library",
                    element: <SafetyLibraryPage />,
                },
                {
                    path: "/safety-privacy",
                    element: <SafetyPrivacyPage />,
                },
                {
                    path: "/careers",
                    element: <CareersPage />,
                },
            ],
        },
        {
            path: "/app",
            element: <AppPage />,
            children: [{}],
        },
    ]);

    return (
        <>
            <div className="App flex w-screen h-screen bg-transparent overflow-hidden">
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
