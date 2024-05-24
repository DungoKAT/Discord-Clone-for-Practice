import WrongTurnGif from "../../assets/WrongTurnGif.gif";

const WrongTurnPage = () => {
    return (
        <>
            <div className="pt-20"></div>
            <div
                className="max-w-[1260px] w-full mx-auto py-[120px] px-10 grid grid-cols-12 gap-x-5
                max-tablet767:py-[56px] max-tablet767:px-6 max-tablet991:py-20 max-tablet991:flex max-tablet991:justify-center"
            >
                <div className="max-w-[600px] mt-5 col-span-7 overflow-auto max-tablet991:-mt-10">
                    <img
                        className="hidden w-[300px] mx-auto mb-10 max-tablet991:block"
                        src={WrongTurnGif}
                        alt=""
                    />
                    <div>
                        <h1 className=" font-gintoNord text-[44px] font-extrabold text-secondary-s1 leading-none max-tablet991:text-[28px]">
                            WRONG TURN?
                        </h1>
                        <p className="mt-5 font-ggsansNormal text-xl leading-[140%] max-tablet991:text-[18px]">
                            You look lost, stranger. You know what helps when
                            you’re lost? A piping hot bowl of noodles. Take a
                            seat, we’re frantically at work here cooking up
                            something good. Oh, you need something to read?
                            These might help you:
                        </p>
                        <ul className="mt-5 font-ggsansNormal text-[20px] no-underline leading-[35px]">
                            <li>
                                <a
                                    className="text-[#00a8fc] hover:text-[#3a5ac3] transition-colors"
                                    href="#"
                                >
                                    Status Page
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#00a8fc] hover:text-[#3a5ac3] transition-colors"
                                    href="https://twitter.com/discord"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @Discord
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#00a8fc] hover:text-[#3a5ac3] transition-colors"
                                    href="#"
                                >
                                    Discord Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[350px] col-span-5 max-tablet991:hidden">
                    <img src={WrongTurnGif} alt="" />
                </div>
            </div>
        </>
    );
};

export default WrongTurnPage;
