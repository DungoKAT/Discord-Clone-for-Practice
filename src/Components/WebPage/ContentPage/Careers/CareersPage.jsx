// components
import Header from "./Header";
import CareersItems from "./CareersItems";
import ElementSlider from "./ElementSlider";
import ImageSlider from "./ImageSlider";
// data
import WorkFilters from "./WorkFilters";
import ExperienceLifeAtDiscord from "./ExperienceLifeAtDiscord";
// assets
import CareerSec2Pic1 from "../../../../assets/CareersPage/CareerSec2Pic1.webp";
import CareerSec2Pic2 from "../../../../assets/CareersPage/CareerSec2Pic2.webp";
import CareerSec2Pic3 from "../../../../assets/CareersPage/CareerSec2Pic3.webp";
import CareerTwinkling from "../../../../assets/CareersPage/CareerTwinkling.svg";
import Wave from "../../../../assets/CareersPage/Wave.webp";
// css
import "../../../../Styles/workfilter.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CareersPage = () => {
    const handleClick = (event) => {
        const filter = document.getElementById("filter");
        const careersItems = document.getElementById("careers-items");
        filter.dataset.departmentName = event.target.dataset.departmentName;
        careersItems.dataset.departmentName =
            event.target.dataset.departmentName;
    };

    return (
        <div className="w-full">
            <Header />
            <section className="pt-20 pb-[50px] max-tablet767:pt-[60px]">
                <div className="maxWidth1180">
                    <div className="w-full flex flex-col justify-start items-center text-center max-tablet767:items-start max-tablet767:text-left">
                        <h2
                            className="mb-[40px] text-[42px] font-bold font-gintoNormal text-primary-b4 leading-[50px] 
                            max-mobile479:mb-6 max-mobile479:text-2xl
                            max-tablet767:text-[32px] max-tablet767:leading-10"
                        >
                            Come build belonging with us
                        </h2>
                        <span className="pb-5 max-tablet767:hidden"></span>
                        <p
                            className=" text-xl font-ggsansNormal leading-[30px] text-[#060a0b]
                            max-mobile479:mb-2 max-mobile479:text-base
                            max-tablet767:text-left max-tablet991:mb-0"
                        >
                            Discord is working toward an inclusive world where
                            no one feels like an outsider, where genuine human
                            connection is a click, text chat, or voice call
                            away. A place where everyone can find belonging.
                            Challenging? Heck yes. Rewarding? Double heck yes.
                            It’s a mission that gives us the chance to
                            positively impact millions of people all over the
                            world.
                            <br />
                            <br />
                            So if this strikes a chord, and you’re equally
                            comfortable communicating in memes and gifs as you
                            are in code or decks, come build belonging with us!
                        </p>
                    </div>
                    <div className="w-full pb-20">
                        <div
                            className="w-full max-h-[450px] h-full mt-[70px] grid grid-cols-2 gap-x-20
                            max-mobile479:gap-6 max-tablet767:grid-cols-1 max-tablet767:gap-10 max-tablet991:max-h-none"
                        >
                            <div className="flex flex-col justify-center">
                                <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none max-mobile479:text-[24px] max-tablet767:text-[28px]">
                                    Work with people who care.
                                </h3>
                                <p className=" text-xl font-ggsansNormal leading-[30px] max-mobile479:mb-2 max-mobile479:text-base max-tablet991:mb-0">
                                    Our people, much like our users, can’t be
                                    put in a box. The quirky and unique cast of
                                    characters that work together at Discord may
                                    be intrepid travelers from all walks of
                                    life, but there’s a reason we’ve all ended
                                    up here. We care about each other, the work
                                    we do, and the future we’re building — like,
                                    a lot. We pull our own weight and treat each
                                    other with extreme empathy.{" "}
                                    <strong>No cogs or jerks allowed.</strong>
                                </p>
                            </div>
                            <img
                                className="max-h-[400px] w-full h-full object-cover rounded-lg max-tablet991:max-h-none"
                                src={CareerSec2Pic1}
                                alt=""
                            />
                        </div>
                        <div
                            className="w-full max-h-[450px] h-full mt-[70px] grid grid-cols-2 gap-x-20
                            max-mobile479:gap-6 max-tablet767:grid-cols-1 max-tablet767:gap-10 max-tablet991:max-h-none"
                        >
                            <img
                                className="max-h-[400px] w-full h-full object-cover rounded-lg max-tablet767:order-last  max-tablet991:max-h-none"
                                src={CareerSec2Pic2}
                                alt=""
                            />
                            <div className="flex flex-col justify-center">
                                <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none max-mobile479:text-[24px] max-tablet767:text-[28px]">
                                    Join a culture that builds belonging.
                                </h3>
                                <p className=" text-xl font-ggsansNormal leading-[30px] max-mobile479:mb-2 max-mobile479:text-base max-tablet991:mb-0">
                                    Imagine a workplace where everyone belongs.
                                    At Discord, we aren&apos;t just imagining
                                    this place, we’re creating it. We’re
                                    building an inclusive, diverse, and
                                    welcoming space that reflects the world we
                                    live, play, and work in — because we know
                                    that with diversity comes better ideas, a
                                    better product, a better work environment,
                                    and ultimately a better company.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full mb-[60px] p-[56px] bg-[#f4f5f7] rounded-2xl 
                        max-mobile479:py-8 max-mobile479:px-5 max-tablet767:p-10 max-tablet991:px-10"
                    >
                        <div
                            className="max-h-[450px] w-full h-full grid grid-cols-2 gap-x-20 
                            max-mobile479:gap-6 max-tablet767:grid-cols-1 max-tablet767:gap-10
                            max-tablet991:max-h-none max-tablet991:items-center max-tablet991:gap-[60px]"
                        >
                            <div className="flex flex-col justify-center">
                                <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none max-mobile479:text-[24px] max-tablet767:text-[28px]">
                                    Internships
                                </h3>
                                <p className="text-xl font-ggsansNormal leading-[30px] max-mobile479:mb-2 max-mobile479:text-base max-tablet991:mb-0">
                                    Join us for an unforgettable summer at
                                    Discord! You’ll be working on real features
                                    that impact millions of people, receive
                                    close mentorship, and learn from leaders in
                                    the industry. We are looking for
                                    undergraduate and graduate students of all
                                    levels. Check out our listings, and{" "}
                                    <span className="text-secondary-s1 cursor-pointer">
                                        read more about our program.
                                    </span>
                                </p>
                            </div>
                            <img
                                className="max-h-[400px] w-full h-full object-cover rounded-lg max-tablet991:max-h-none"
                                src={CareerSec2Pic3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative max-w-[900px] mx-auto flex flex-col items-center">
                        <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none max-mobile479:text-[24px] max-tablet767:text-[28px]">
                            Want to find out more?
                        </h3>
                        <img
                            className="absolute max-w-none w-[103%] pr-[31px] -top-[30px] bottom-auto left-0
                            max-mobile479:min-w-[98vw] max-mobile479:w-full max-mobile479:mr-[-5%] max-mobile479:top-0 max-mobile479:left-0
                            max-tablet767:w-[105%] max-tablet767:top-[-9px] max-tablet767:left-[-2%]
                            max-tablet991:w-[110%] max-tablet991:top-[-35px] max-tablet991:left-[-6%]"
                            src={CareerTwinkling}
                            alt=""
                        />
                        <p className="text-xl font-ggsansNormal leading-[30px] max-mobile479:mb-2 max-mobile479:text-base max-tablet767:text-center max-tablet991:mb-0">
                            Check out our{" "}
                            <span className="text-secondary-s1 cursor-pointer">
                                inclusion, diversity and purpose efforts,{" "}
                            </span>
                            or learn more about{" "}
                            <span className="text-secondary-s1 cursor-pointer">
                                the Life @ Discord{" "}
                            </span>
                            experience!
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full pb-5 bg-primary-w5 max-tablet991:mb-[60px]">
                <div className="w-full overflow-hidden max-mobile479:h-[100px]">
                    <div className="w-[1920px] h-[100px] -mt-[5px] mb-[65px] max-mobile479:w-full max-mobile479:mt-[-2px]">
                        <img className="overflow-hidden" src={Wave} alt="" />
                    </div>
                </div>
                <div className="maxWidth1180">
                    <h2
                        className="mb-10 text-[42px] font-bold font-gintoNormal leading-[50px]
                        max-mobile479:mb-6 max-mobile479:text-2xl
                        max-tablet767:text-[32px] max-tablet767:leading-8"
                    >
                        We&apos;d love to work with someone like you.
                    </h2>
                    <h3
                        className="mb-5 text-[32px] font-bold font-gintoNormal leading-8
                        max-mobile479:text-2xl max-tablet767:text-[28px]"
                    >
                        Filters
                    </h3>
                    <div
                        className="w-full flex flex-wrap overflow-auto
                        max-tablet991:w-[105%] max-tablet991:overflow-auto max-tablet991:flex max-tablet991:flex-nowrap 
                        max-tablet991:ml-[-10px] max-tablet991:pt-[10px] max-tablet991:pb-5 max-tablet991:pl-[10px]"
                        id="filter"
                        data-department-name="Featured"
                    >
                        {Object.keys(WorkFilters).map((prop, index) => {
                            const departmentName =
                                WorkFilters[prop].departmentName;
                            return (
                                <button
                                    className="mb-2 mr-3 py-4 px-8 text-xl font-ggsansNormal leading-6 bg-white rounded-[28px] transition-all hover:shadow-[0_12px_12px_0px_rgba(0,0,0,0.15)]
                                    max-tablet767:text-base max-tablet991:flex-none"
                                    data-department-name={departmentName}
                                    onClick={(event) => handleClick(event)}
                                    key={index}
                                >
                                    {departmentName}
                                </button>
                            );
                        })}
                    </div>
                    <div id="careers-items" data-department-name="Featured">
                        <CareersItems workFilters={WorkFilters} />
                    </div>
                    <div className="mt-20 max-tablet991:mt-[60px]">
                        <h2
                            className="mb-10 text-[42px] font-semibold font-gintoNormal leading-[50px]
                            max-mobile479:mb-6 max-mobile479:text-2xl max-tablet767:text-[32px] max-tablet767:leading-10"
                        >
                            Inclusion, Diversity and Purpose at Discord
                        </h2>
                        <div
                            className="mt-[14px] grid grid-cols-2 gap-x-20 max-mobile479:gap-6
                            max-tablet767:grid-cols-1 max-tablet767:gap-10 max-tablet991:gap-[60px]"
                        >
                            <div className="flex flex-col items-start max-tablet767:order-last">
                                <h3
                                    className="mb-5 text-[32px] font-semibold font-gintoNormal text-primary-b4 leading-none
                                    max-mobile479:text-2xl max-tablet767:text-[32px] max-tablet767:leading-10"
                                >
                                    Belonging from the Inside Out
                                </h3>
                                <p className="text-xl font-ggsansNormal text-[#060a0b] leading-[30px] max-mobile479:mb-2 max-mobile479:text-base max-tablet991:mb-0">
                                    Our internal programs include but are not
                                    limited to unconscious bias training,
                                    employee resource groups, inclusive hiring
                                    practices, diversity sourcing strategies,
                                    and partnerships with high-impact
                                    organizations that drive equity. As we build
                                    our external strategy, we empower our
                                    employees to be a force for good in the
                                    world and support causes they are passionate
                                    about.
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3
                                    className="mb-5 text-[32px] font-semibold font-gintoNormal text-primary-b4 leading-none
                                    max-mobile479:text-2xl max-tablet767:text-[32px] max-tablet767:leading-10"
                                >
                                    Our Employee Resource Groups
                                </h3>
                                <p className=" text-xl font-ggsansNormal text-[#060a0b] leading-[30px] max-mobile479:mb-2 max-mobile479:text-base max-tablet991:mb-0">
                                    Discord’s Employee Resource Groups (ERGs)
                                    are employee-led organizations centered
                                    around belonging. Led by our Inclusion,
                                    Diversity & Purpose team, Discord empowers
                                    our ERGs to create an inclusive space where
                                    members of underrepresented groups and
                                    allies can come together to celebrate our
                                    diverse communities. Our ERG leads have 10%
                                    allocated work time to help build belonging
                                    through promoting education and awareness,
                                    offering learning opportunities, and driving
                                    advocacy for their communities in and
                                    outside of Discord.
                                </p>
                            </div>
                        </div>
                        <ElementSlider />
                    </div>
                </div>
            </section>
            <section className="w-full pt-[90px] pb-[120px] bg-secondary-s1 max-tablet991:pt-[120px]">
                <div className="maxWidth1180">
                    <h2
                        className="mb-10 text-[42px] text-white font-semibold font-gintoNormal leading-[50px]
                        max-mobile479:mb-6 max-mobile479:text-2xl max-tablet767:text-[32px] max-tablet767:leading-10"
                    >
                        Experience Life @ Discord
                    </h2>
                    <div
                        className="mt-[120px] px-[30px] grid grid-cols-3 gap-x-20 gap-y-10 
                        max-mobile479:mt-10 max-mobile479:grid-cols-1 max-tablet767:mt-[60px]
                        max-tablet991:px-0 max-tablet991:mt-20 max-tablet991:grid-cols-2 max-tablet991:gap-x-[30px]"
                    >
                        {ExperienceLifeAtDiscord.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img
                                        className={
                                            index === 1
                                                ? " max-w-[35px]"
                                                : index === 2
                                                ? " max-w-[34px]"
                                                : "max-w-full"
                                        }
                                        src={item.icon}
                                        alt=""
                                    />
                                    <h5 className="my-[10px] text-xl font-semibold font-ggsansNormal text-white leading-6">
                                        {item.topic}
                                    </h5>
                                    <p className="mb-5 text-xl font-ggsansNormal text-white leading-[30px] max-mobile479:text-base">
                                        {item.paragraph}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-[120px] bg-[#2c2f33] max-mobile479:pb-5 max-tablet991:pt-20 max-tablet991:pb-[60px]">
                <div className="relative maxWidth1180">
                    <div className="mt-[10px] mb-[120px] max-tablet767:mb-[60px]">
                        <p className="text-xl font-ggsansNormal text-white text-center leading-6 max-mobile479:text-base">
                            If you&apos;re wanting to work with a motivated team
                            on something that gives millions of users a space to
                            find belonging, check out the four values of working
                            at Discord{" "}
                            <span className="text-secondary-s1 underline cursor-pointer">
                                on our blog
                            </span>{" "}
                            . For all roles, we&apos;re hiring people to join us
                            in our beautiful San Francisco office, and for
                            select, indicated positions, we&apos;re currently
                            open to having people join our team remotely in
                            these states:
                        </p>
                        <br />
                        <p className="text-xl font-ggsansNormal text-white text-center leading-6 max-mobile479:text-base">
                            Alabama - Alaska - Arizona - California - Colorado -
                            Connecticut - District of Columbia - Florida -
                            Georgia - Idaho - Illinois - Indiana - Iowa - Kansas
                            - Kentucky - Louisiana - Maine - Maryland -
                            Massachusetts - Michigan - Minnesota - Mississippi -
                            Missouri - Montana -Nevada - New Hampshire - New
                            Jersey - New Mexico - New York - North Carolina -
                            Ohio - Oklahoma - Oregon - Pennsylvania - Rhode
                            Island - South Carolina - Tennessee - Texas - Utah -
                            Vermont - Virginia - Washington - Wisconsin
                        </p>
                    </div>
                </div>
                <ImageSlider />
            </section>
        </div>
    );
};

export default CareersPage;
