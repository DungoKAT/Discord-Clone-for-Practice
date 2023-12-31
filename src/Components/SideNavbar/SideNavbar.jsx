import { useState } from "react";
import { BsDiscord, BsPlusLg } from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
import SideNavItem from "./SideNavItem";
import CreateServerModal from "../Modal/SideNavbarModal/CreateServerModal";

import "../../Styles/sidenavbar.css";

const SideNavbar = () => {
    const [serverSelect, setServerSelect] = useState("discord");
    const [createServerModalOpen, setCreateServerModalOpen] = useState(false);

    return (
        <>
            <div className=" w-min h-screen pt-3 flex flex-col items-center bg-primary-b1 text-9xl text-white ">
                <SideNavItem
                    id="discord"
                    txt={<BsDiscord />}
                    classStyle={"link1 icon1"}
                    serverSelect={serverSelect}
                    setServerSelect={setServerSelect}
                    tooltipText="Direct Messages"
                />
                <div className="w-8 h-0.5 mb-2 bg-primary-b4"></div>
                <SideNavItem
                    id="server-link-1"
                    txt={"T"}
                    classStyle={"link1 text"}
                    serverSelect={serverSelect}
                    setServerSelect={setServerSelect}
                    tooltipText="Test1"
                />
                <SideNavItem
                    id="plus"
                    txt={<BsPlusLg />}
                    classStyle={"link2 icon2"}
                    serverSelect={serverSelect}
                    setServerSelect={setServerSelect}
                    tooltipText="Add a Server"
                    setCreateServerModalOpen={setCreateServerModalOpen}
                />
                <SideNavItem
                    id="compass"
                    txt={<IoMdCompass />}
                    classStyle={"link2 icon2"}
                    serverSelect={serverSelect}
                    setServerSelect={setServerSelect}
                    tooltipText="Explore Discoverable Servers"
                />
                <div className="w-8 h-0.5 mb-2 bg-primary-b4"></div>
                <SideNavItem
                    id="download"
                    txt={<RxDownload />}
                    classStyle={"link2 icon2"}
                    serverSelect={serverSelect}
                    setServerSelect={setServerSelect}
                    tooltipText="Download Apps"
                />
            </div>
            <CreateServerModal
                createServerModalOpen={createServerModalOpen}
                setCreateServerModalOpen={setCreateServerModalOpen}
            />
        </>
    );
};

export default SideNavbar;
