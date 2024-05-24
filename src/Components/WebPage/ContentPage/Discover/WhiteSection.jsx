import ServerPreImage from "../../../../assets/DiscoverPage/CommuServers/Midjourney/ServerPreImage.svg";

const WhiteSection = () => {
    return (
        <section className="w-full py-[120px] flex justify-center items-center bg-primary-w5 max-tablet991:py-12">
            <div
                className="max-w-[1260px] w-full px-10 grid grid-cols-12 gap-x-5 
                max-tablet991:px-6 max-tablet991:flex-col"
            >
                <div className="hidden justify-center col-span-12 max-tablet991:flex">
                    <img className="" src={ServerPreImage} alt="" />
                </div>
                <div className="mb-4 mx-12 flex flex-col justify-center items-center col-span-5 max-tablet991:col-span-12">
                    <h2 className="mb-6 text-[32px] font-ggsans leading-10 max-tablet991:mb-4 max-tablet991:self-start max-tablet991:text-2xl max-tablet991:leading-[30px]">
                        Find a place where you belong
                    </h2>
                    <p className="mb-6 text-xl font-ggsansNormal leading-6 max-tablet991:mb-4 max-tablet991:text-base max-tablet991:leading-5">
                        Discord servers are organized into topic-based channels
                        where you can collaborate, share, and just talk about
                        your day without clogging up a group chat.
                    </p>
                    <button className="w-[327px] h-[53px] py-4 px-8 text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-none">
                        Join Discord
                    </button>
                </div>
                <img
                    className="col-span-7 col-start-6 max-tablet991:hidden"
                    src={ServerPreImage}
                    alt=""
                />
            </div>
        </section>
    );
};

export default WhiteSection;
