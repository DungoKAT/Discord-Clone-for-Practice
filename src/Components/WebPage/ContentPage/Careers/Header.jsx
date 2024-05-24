import CareerHeroPic1 from "../../../../assets/CareersPage/Header/CareerHeroPic1.webp";
import CareerHeroPic2 from "../../../../assets/CareersPage/Header/CareerHeroPic2.webp";
import CareerHeroPic3 from "../../../../assets/CareersPage/Header/CareerHeroPic3.webp";
import CareerHeroPic4 from "../../../../assets/CareersPage/Header/CareerHeroPic4.webp";
import CareerHeroPic5 from "../../../../assets/CareersPage/Header/CareerHeroPic5.webp";

const Header = () => {
    return (
        <section className="w-full pt-[170px] pb-[120px] bg-secondary-s1 max-tablet767:pt-[100px] max-tablet991:pb-0 max-tablet991:pt-[120px]">
            <div className="maxWidth1180 flex justify-center items-center">
                <div className="w-[700px] text-center max-tablet767:w-[90%]">
                    <h1 className="mb-6 text-[50px] font-extrabold font-gintoNord text-white leading-none max-mobile479:text-[32px] max-tablet767:text-[36px]">
                        WORK AT DISCORD
                    </h1>
                    <p className="mb-5 text-xl font-ggsansNormal text-white leading-[30px] max-mobile479:mb-[10px] max-mobile479:text-base">
                        Discord is home to (com) passionate people who believe
                        in our mission of creating space for everyone to find
                        belonging.
                    </p>
                </div>
            </div>
            <div className="w-full py-[120px] max-mobile479:pb-20 max-tablet767:pt-5 max-tablet767:pb-[100px] max-tablet991:pt-[60px]">
                <div className="maxWidth1180">
                    <div className="relative max-w-[780px] w-full mx-auto max-mobile479:flex-col max-tablet991:mt-0 max-tablet991:flex max-tablet991:flex-wrap">
                        <img
                            className="relative max-w-[700px] w-full mx-auto rounded-[20px] z-10 max-mobile479:w-full max-tablet991:w-[86%] max-desktop1280:max-w-[600px]"
                            src={CareerHeroPic1}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[380px] w-full max-h-[220px] -top-[41px] bottom-auto -left-[312px] right-auto object-cover object-top rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,.1)] z-0 max-tablet767:hidden
                            max-tablet991:static max-tablet991:max-w-[360px] max-tablet991:w-1/2 max-tablet991:mt-10
                            max-desktop1280:max-w-[250px] max-desktop1280:left-[-152px] max-desktop1440:left-[-276px]"
                            src={CareerHeroPic2}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[280px] w-full max-h-[186px] -top-[60px] bottom-auto left-auto -right-[193px] object-cover object-top rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,.1)] max-tablet767:hidden
                            max-tablet991:static max-tablet991:w-[35%] max-tablet991:mt-[140px] max-tablet991:mr-[30px] max-tablet991:ml-auto
                            max-desktop1280:right-[-116px]"
                            src={CareerHeroPic3}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[180px] w-full max-h-[100px] top-auto -bottom-[55px] -left-[87px] right-auto object-cover object-top rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,.1)] max-tablet767:hidden
                            max-tablet991:static max-tablet991:ml-[60px]
                            max-desktop1280:left-[-51px]"
                            src={CareerHeroPic4}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[380px] w-full max-h-[220px] top-auto -bottom-[140px] left-auto -right-[228px] object-cover object-top rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,.1)] max-tablet767:hidden
                            max-tablet991:static max-tablet991:max-w-[360px] max-tablet991:mt-10 max-tablet991:mr-0 max-tablet991:ml-auto
                            max-desktop1280:max-w-[330px] max-desktop1280:right-[-145px]"
                            src={CareerHeroPic5}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
