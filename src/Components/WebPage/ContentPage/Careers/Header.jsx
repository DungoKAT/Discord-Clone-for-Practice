import CareerHeroPic1 from "../../../../assets/CareersPage/Header/CareerHeroPic1.webp";
import CareerHeroPic2 from "../../../../assets/CareersPage/Header/CareerHeroPic2.webp";
import CareerHeroPic3 from "../../../../assets/CareersPage/Header/CareerHeroPic3.webp";
import CareerHeroPic4 from "../../../../assets/CareersPage/Header/CareerHeroPic4.webp";
import CareerHeroPic5 from "../../../../assets/CareersPage/Header/CareerHeroPic5.webp";

const Header = () => {
    return (
        <section className="w-full pt-[170px] pb-[120px] bg-secondary-s1">
            <div className="max-w-[1180px] w-full mx-auto flex justify-center items-center">
                <div className="w-[700px] text-center">
                    <h1 className="mb-6 text-[50px] font-extrabold font-gintoNord text-white leading-none">
                        WORK AT DISCORD
                    </h1>
                    <p className="mb-5 text-xl font-ggsansNormal text-white leading-[30px]">
                        Discord is home to (com) passionate people who believe
                        in our mission of creating space for everyone to find
                        belonging.
                    </p>
                </div>
            </div>
            <div className="w-full py-[120px]">
                <div className="max-w-[1180px] w-full mx-auto">
                    <div className="relative max-w-[780px] w-full mx-auto">
                        <img
                            className="relative max-w-[700px] w-full mx-auto rounded-[20px] z-10"
                            src={CareerHeroPic1}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[380px] w-full max-h-[220px] -top-[41px] bottom-auto -left-[312px] right-auto object-cover object-top rounded-2xl z-0"
                            src={CareerHeroPic2}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[280px] w-full max-h-[186px] -top-[60px] bottom-auto left-auto -right-[193px] object-cover object-top rounded-2xl"
                            src={CareerHeroPic3}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[180px] w-full max-h-[100px] top-auto -bottom-[55px] -left-[87px] right-auto object-cover object-top rounded-2xl"
                            src={CareerHeroPic4}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[380px] w-full max-h-[220px] top-auto -bottom-[140px] left-auto -right-[228px] object-cover object-top rounded-2xl"
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
