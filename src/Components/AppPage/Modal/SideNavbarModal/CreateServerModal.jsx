import { BsX, BsPlusCircleFill } from "react-icons/bs";
import { BiSolidCamera } from "react-icons/bi";
import PropTypes from "prop-types";
import { useState } from "react";

const CreateServerModal = ({
    createServerModalOpen,
    setCreateServerModalOpen,
}) => {
    const [serverName, setServerName] = useState(
        "62070125 Johan Liebert's server"
    );

    return (
        <div
            className={
                createServerModalOpen
                    ? "create-server-modal active"
                    : "create-server-modal"
            }
        >
            <div
                className="backdrop"
                onClick={() => setCreateServerModalOpen(false)}
            ></div>
            <div className="create-server-card">
                <form action="" onSubmit={(e) => setServerName(e.target.value)}>
                    <header className="relative pt-6 px-6 text-center">
                        <h1 className=" font-extrabold text-[1.5rem] leading-[30px]">
                            Customize your server
                        </h1>
                        <p className="mt-2 mx-1 font-ggsansNormal text-[16px] leading-5">
                            Give your new server a personality with a name and
                            an icon. You can always change it later.
                        </p>
                        <BsX
                            className="absolute top-2.5 right-2.5 text-[35px] text-font-f4 hover:text-primary-w1 transition-all ease-linear duration-150 cursor-pointer"
                            onClick={() => setCreateServerModalOpen(false)}
                        />
                    </header>
                    <div className="flex flex-1 flex-col my-4 px-4">
                        <div className="flex justify-center pt-1 w-full">
                            <div className="relative flex justify-center items-center w-20 h-20 border-2 border-dashed border-primary-b5 rounded-full cursor-pointer">
                                <div className="flex flex-col items-center">
                                    <BiSolidCamera className=" text-2xl text-primary-w1" />
                                    <p className=" text-xs text-primary-b5">
                                        UPLOAD
                                    </p>
                                </div>
                                <BsPlusCircleFill className="absolute -top-0.5 -right-0.5 text-secondary-s1 text-2xl bg-white rounded-full" />
                                <input
                                    className="absolute w-full h-full rounded-full bg-transparent opacity-0 cursor-pointer"
                                    type="file"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-6 w-full">
                            <label className=" mb-2 text-xs text-primary-w1">
                                SERVER NAME
                            </label>
                            <input
                                className="p-[10px] bg-primary-w3 font-ggsansNormal text-base leading-none rounded-[3px]"
                                type="text"
                                placeholder=""
                                value={serverName}
                                onChange={(e) => setServerName(e.target.value)}
                            />
                            <p className=" mt-2 pb-1 font-ggsansNormal text-xs">
                                By creating a server. you agree to
                                Discord&apos;s{" "}
                                <a
                                    className=" text-blue-500 font-bold hover:underline"
                                    href="#"
                                >
                                    {" "}
                                    Community Guidelines
                                </a>
                            </p>
                        </div>
                    </div>
                    <footer className="flex justify-between mt-auto mb-0 p-4 bg-primary-w4">
                        <button className=" py-0.5 px-1 font-ggsansNormal font-semibold text-sm text-primary-b1">
                            Back
                        </button>
                        <button className=" py-[9px] px-7 font-ggsansNormal font-medium text-sm text-font-f1 bg-secondary-s1 rounded-[3px] hover:bg-secondary-s1Hover transition">
                            Create
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    );
};

CreateServerModal.propTypes = {
    createServerModalOpen: PropTypes.bool,
    setCreateServerModalOpen: PropTypes.func,
};

export default CreateServerModal;
