// import { useEffect, useState } from "react";
// import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import WebPage from "./Components/WebPage/WebPage.jsx";
import HomePage from "./Components/WebPage/ContentPage/Home/HomePage.jsx";
import DownloadPage from "./Components/WebPage/ContentPage/Download/DownloadPage.jsx";
import NitroPage from "./Components/WebPage/ContentPage/Nitro/NitroPage.jsx";
import DiscoverPage from "./Components/WebPage/ContentPage/Discover/DiscoverPage.jsx";
import CommuServer from "./Components/WebPage/ContentPage/Discover/CommuServer.jsx";
import ServerPreview from "./Components/WebPage/ContentPage/Discover/ServerPreview.jsx";
import SafetyPage from "./Components/WebPage/ContentPage/Safety/SafetyPage.jsx";
import SafetyLibraryPage from "./Components/WebPage/ContentPage/Safety/HubPage/SafetyLibrary.jsx";
import SafetyPrivacyPage from "./Components/WebPage/ContentPage/Safety/HubPage/SafetyPrivacy.jsx";
import CareersPage from "./Components/WebPage/ContentPage/Careers/CareersPage.jsx";
import AppPage from "./Components/AppPage/AppPage.jsx";
// import SideNavbar from "./Components/SideNavbar/SideNavbar";
// import Content from "./Components/Content/Content";

import "./App.css";

function App() {
    const baseURL = "https://node-servers-api-vercel.vercel.app/servers";
    const loaderServerPath = async ({ params }) => {
        const res = await fetch(`${baseURL}/${params.serverPathName}`);
        if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
        }
        return res.json();
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: <WebPage />,
            errorElement: <WebPage />,
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
                    async loader({ request }) {
                        const url = new URL(request.url);
                        return await fetch(`${baseURL}${url.search}`).then(
                            (response) => response.json()
                        );
                    },
                    children: [
                        {
                            path: "/servers",
                            element: <CommuServer />,
                            async loader({ request }) {
                                const url = new URL(request.url);
                                return await fetch(
                                    `${baseURL}${url.search}`
                                ).then((response) => response.json());
                            },
                        },
                        {
                            path: "/servers/gaming",
                            element: <CommuServer />,
                            async loader({ request }) {
                                const url = new URL(request.url);
                                return await fetch(
                                    `${baseURL}/gaming${url.search}`
                                ).then((response) => response.json());
                            },
                        },
                        {
                            path: "/servers/entertainment",
                            element: <CommuServer />,
                            async loader({ request }) {
                                const url = new URL(request.url);
                                return await fetch(
                                    `${baseURL}/entertainment${url.search}`
                                ).then((response) => response.json());
                            },
                        },
                        {
                            path: "/servers/education",
                            element: <CommuServer />,
                            async loader({ request }) {
                                const url = new URL(request.url);
                                return await fetch(
                                    `${baseURL}/education${url.search}`
                                ).then((response) => response.json());
                            },
                        },
                        {
                            path: "/servers/science&tech",
                            element: <CommuServer />,
                            async loader({ request }) {
                                const url = new URL(request.url);
                                return await fetch(
                                    `${baseURL}/science&tech${url.search}`
                                ).then((response) => response.json());
                            },
                        },
                        {
                            path: "/servers/music",
                            element: <CommuServer />,
                            async loader({ request }) {
                                const url = new URL(request.url);
                                return await fetch(
                                    `${baseURL}/music${url.search}`
                                ).then((response) => response.json());
                            },
                        },
                    ],
                },
                {
                    path: "/servers/:serverPathName",
                    element: <ServerPreview />,
                    loader({ params }) {
                        return loaderServerPath({ params });
                    },
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
