import ServerPreImage from "../../../../assets/DiscoverPage/CommuServers/Midjourney/ServerPreImage.svg";

const WhiteSection = () => {
    return (
        <section className="w-full py-[120px] flex justify-center items-center bg-primary-w5">
            <div className="max-w-[1260px] w-full px-10 grid grid-cols-12 gap-x-5">
                <div className="mb-4 mx-12 flex flex-col justify-center items-center col-span-5">
                    <h2 className="mb-6 text-[32px] font-ggsans leading-10">
                        Find a place where you belong
                    </h2>
                    <p className="mb-6 text-xl font-ggsansNormal leading-6">
                        Discord servers are organized into topic-based channels
                        where you can collaborate, share, and just talk about
                        your day without clogging up a group chat.
                    </p>
                    <button className="w-[327px] h-[53px] py-4 px-8 text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-none">
                        Join Discord
                    </button>
                </div>
                <img
                    className="col-span-7 col-start-6"
                    src={ServerPreImage}
                    alt=""
                />
            </div>
        </section>
    );
};

export default WhiteSection;
