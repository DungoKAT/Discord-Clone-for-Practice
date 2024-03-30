import Header from "./Header";
import CareersItems from "./CareersItems";
// data
import WorkFilters from "./WorkFilters";
// assets
import CareerSec2Pic1 from "../../../../assets/CareersPage/CareerSec2Pic1.webp";
import CareerSec2Pic2 from "../../../../assets/CareersPage/CareerSec2Pic2.webp";
import CareerSec2Pic3 from "../../../../assets/CareersPage/CareerSec2Pic3.webp";
import CareerTwinkling from "../../../../assets/CareersPage/CareerTwinkling.svg";
import Wave from "../../../../assets/CareersPage/Wave.webp";
import CareerSlidePic1 from "../../../../assets/CareersPage/Slider/CareerSlidePic1.webp";
import CareerSlidePic2 from "../../../../assets/CareersPage/Slider/CareerSlidePic2.webp";
import CareerSlidePic3 from "../../../../assets/CareersPage/Slider/CareerSlidePic3.webp";
import CareerSlidePic4 from "../../../../assets/CareersPage/Slider/CareerSlidePic4.webp";
import CareerSlidePic5 from "../../../../assets/CareersPage/Slider/CareerSlidePic5.webp";
import CareerSlidePic6 from "../../../../assets/CareersPage/Slider/CareerSlidePic6.webp";
import CareerSlidePic7 from "../../../../assets/CareersPage/Slider/CareerSlidePic7.webp";
import ArrowLeft1 from "../../../../assets/CareersPage/Arrow/ArrowLeft1.svg";
import ArrowRight1 from "../../../../assets/CareersPage/Arrow/ArrowRight1.svg";
import ArrowLeft2 from "../../../../assets/CareersPage/Arrow/ArrowLeft2.svg";
import ArrowRight2 from "../../../../assets/CareersPage/Arrow/ArrowRight2.svg";
import GreenIcon1 from "../../../../assets/CareersPage/GreenIcon/GreenIcon1.svg";
import GreenIcon2 from "../../../../assets/CareersPage/GreenIcon/GreenIcon2.svg";
import GreenIcon3 from "../../../../assets/CareersPage/GreenIcon/GreenIcon3.svg";
import GreenIcon4 from "../../../../assets/CareersPage/GreenIcon/GreenIcon4.svg";
import GreenIcon5 from "../../../../assets/CareersPage/GreenIcon/GreenIcon5.svg";
import GreenIcon6 from "../../../../assets/CareersPage/GreenIcon/GreenIcon6.svg";
import GreenIcon7 from "../../../../assets/CareersPage/GreenIcon/GreenIcon7.svg";
import GreenIcon8 from "../../../../assets/CareersPage/GreenIcon/GreenIcon8.svg";
import GreenIcon9 from "../../../../assets/CareersPage/GreenIcon/GreenIcon9.svg";
// css
import "../../../../Styles/workfilter.css";

const CareersPage = () => {
    const handleClick = (event) => {
        const filter = document.getElementById("filter");
        const careersItems = document.getElementById("careers-items");
        filter.dataset.departmentName = event.target.dataset.departmentName;
        careersItems.dataset.departmentName =
            event.target.dataset.departmentName;
    };
    const experienceLifeAtDiscord = [
        {
            icon: GreenIcon1,
            topic: "Discord HQ",
            paragraph:
                "Our platform is our headquarters! Because we believe great work isn't tied to a physical space, most of our roles offer flexibility — whether it's from the comfort of your home (in approved locations), an inspiring office setting or a combo of both! No matter where your desk lives, we offer generous support to help you remain productive and engaged.",
        },
        {
            icon: GreenIcon2,
            topic: "Grow together",
            paragraph:
                "Look forward to developing both professionally and personally alongside your colleagues at Discord. All of our managers go through a leadership program, and we offer diverse trainings for everyone. No matter what your interests or skills are, there's a place on our platform for you to find and build belonging.",
        },
        {
            icon: GreenIcon3,
            topic: "Money matters",
            paragraph:
                "Discord strives to offer fair and competitive compensation packages, including equity. You'll have room to grow and be rewarded based on your contributions and impact at the company.  Take advantage of our retirement offerings (including 401k matching in the U.S.) to meet your financial goals.",
        },
        {
            icon: GreenIcon4,
            topic: "Health benefits",
            paragraph:
                "At Discord, we health-care about you! We offer flexible health plans that cover both physical and mental healthcare.",
        },
        {
            icon: GreenIcon5,
            topic: "Family support",
            paragraph:
                "Spend some quality time with the next generation with parental leave, fertility, adoption, and surrogacy benefits.",
        },
        {
            icon: GreenIcon6,
            topic: "R&R",
            paragraph:
                "Stay refreshed with four weeks of PTO, 14+ paid holidays and flexible sick time (which includes mental health days).",
        },
        {
            icon: GreenIcon7,
            topic: "Gender-affirming care",
            paragraph:
                "Many medical insurance providers consider much of the treatment vital to one’s gender transition as cosmetic. We don’t. Use up to $20,000 for transition-related procedures.",
        },
        {
            icon: GreenIcon8,
            topic: "Wellness on us",
            paragraph:
                "Take advantage of a quarterly stipend for your gym membership or other activities to keep you feeling great. Plus virtual yoga every week!",
        },
        {
            icon: GreenIcon9,
            topic: "Giving back",
            paragraph:
                "Whatever social cause you’re passionate about, take a day (or two) off to make an impact. While you're at it, take advantage of $1,000/year in donation matching to charitable organizations!",
        },
    ];

    return (
        <div className="w-full">
            <Header />
            <section className="pt-20 pb-[50px]">
                <div className="max-w-[1180px] w-full mx-auto">
                    <div className="w-full flex flex-col justify-start items-center text-center">
                        <h2 className="mb-[40px] text-[42px] font-bold font-gintoNormal text-primary-b4 leading-[50px]">
                            Come build belonging with us
                        </h2>
                        <span className="pb-5"></span>
                        <p className=" text-xl font-ggsansNormal leading-[30px] text-[#060a0b]">
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
                        <div className="w-full max-h-[450px] h-full mt-[70px] grid grid-cols-2 gap-x-20">
                            <div className="flex flex-col justify-center">
                                <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none">
                                    Work with people who care.
                                </h3>
                                <p className=" text-xl font-ggsansNormal leading-[30px]">
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
                                className="max-h-[400px] w-full h-full object-cover rounded-lg"
                                src={CareerSec2Pic1}
                                alt=""
                            />
                        </div>
                        <div className="w-full max-h-[450px] h-full mt-[70px] grid grid-cols-2 gap-x-20">
                            <img
                                className=" rounded-lg"
                                src={CareerSec2Pic2}
                                alt=""
                            />
                            <div className="flex flex-col justify-center">
                                <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none">
                                    Join a culture that builds belonging.
                                </h3>
                                <p className=" text-xl font-ggsansNormal leading-[30px]">
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
                    <div className="w-full mb-[60px] p-[56px] bg-[#f4f5f7] rounded-2xl">
                        <div className="max-h-[450px] w-full h-full grid grid-cols-2 gap-x-20">
                            <div className="flex flex-col justify-center">
                                <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none">
                                    Internships
                                </h3>
                                <p className=" text-xl font-ggsansNormal leading-[30px]">
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
                                className="max-h-[400px] w-full h-full object-cover rounded-lg"
                                src={CareerSec2Pic3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative max-w-[900px] mx-auto flex flex-col items-center">
                        <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none">
                            Want to find out more?
                        </h3>
                        <img
                            className="absolute max-w-none w-[103%] pr-[31px] -top-[30px] bottom-auto left-0"
                            src={CareerTwinkling}
                            alt=""
                        />
                        <p className="text-xl font-ggsansNormal leading-[30px]">
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
            <section className="w-full pb-5 bg-primary-w5">
                <div className="w-full overflow-hidden">
                    <div className="w-[1920px] h-[100px] -mt-[5px] mb-[65px]">
                        <img className="overflow-hidden" src={Wave} alt="" />
                    </div>
                </div>
                <div className="max-w-[1180px] w-full mx-auto">
                    <h2 className="mb-10 text-[42px] font-bold font-gintoNormal leading-[50px]">
                        We&apos;d love to work with someone like you.
                    </h2>
                    <h3 className="mb-5 text-[32px] font-bold font-gintoNormal leading-none">
                        Filters
                    </h3>
                    <div
                        className="w-full flex flex-wrap"
                        id="filter"
                        data-department-name="Featured"
                    >
                        {Object.keys(WorkFilters).map((prop, index) => {
                            const departmentName =
                                WorkFilters[prop].departmentName;
                            return (
                                <button
                                    className={`mb-2 mr-3 py-4 px-8 text-xl font-ggsansNormal leading-6 bg-white rounded-[28px] transition-all
                                    hover:shadow-[0_12px_12px_0px_rgba(0,0,0,0.15)]`}
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
                    <div className="mt-20">
                        <h2 className="mb-10 text-[42px] font-semibold font-gintoNormal leading-[50px]">
                            Inclusion, Diversity and Purpose at Discord
                        </h2>
                        <div className="mt-[14px] grid grid-cols-2 gap-x-20">
                            <div className="flex flex-col items-start">
                                <h3 className="mb-5 text-[32px] font-semibold font-gintoNormal text-primary-b4 leading-none">
                                    Belonging from the Inside Out
                                </h3>
                                <p className=" text-xl font-ggsansNormal text-[#060a0b] leading-[30px]">
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
                                <h3 className="mb-5 text-[32px] font-semibold font-gintoNormal text-primary-b4 leading-none">
                                    Our Employee Resource Groups
                                </h3>
                                <p className=" text-xl font-ggsansNormal text-[#060a0b] leading-[30px]">
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
                        <div className="relative max-w-[900px] w-full min-h-[400px] h-full mt-[60px] mb-20 mx-auto bg-white rounded-[14px] shadow-[2px_2px_4px_rgba(0,0,0,.07)]">
                            <div className="relative w-full h-[400px] py-[37px] pl-10 pr-[70px] overflow-hidden">
                                <div className="w-full flex items-center">
                                    <img
                                        className="max-w-[200px] w-full mr-10 rounded-md"
                                        src={CareerSlidePic1}
                                        alt=""
                                    />
                                    <div>
                                        <h5 className="my-[10px] text-xl font-semibold font-ggsans text-[#060a0b] leading-[26px]">
                                            Pride
                                        </h5>
                                        <p className="my-5 text-base font-ggsansNormal text-[#2c2f33] leading-6">
                                            The Discord Pride Employee Resource
                                            Group is a safe haven for the
                                            LGBTQIA2S+ community and its allies.
                                            It offers education, belonging and a
                                            place to celebrate the identity of
                                            its members. Discord’s Pride ERG has
                                            made an impact on the community at
                                            the company and beyond by offering
                                            LGBTQIA2S+-inclusive and informed
                                            guidance regarding policy and
                                            benefits, including comprehensive
                                            transitioning benefits and improved
                                            access to gender-affirming
                                            healthcare. The group also hosts fun
                                            and educational events like allyship
                                            training, employee panels and
                                            community involvement with partners
                                            like GLSEN.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="absolute w-[50px] h-[50px] top-0 bottom-0 left-0 right-auto -ml-[25px] my-auto flex justify-center items-center bg-[#efefef] border-[2px] border-[#d9d9d9] rounded-full">
                                <img
                                    className="w-[22px]"
                                    src={ArrowLeft1}
                                    alt=""
                                />
                            </button>
                            <button className="absolute w-[50px] h-[50px] top-0 bottom-0 left-auto right-0 -mr-[25px] my-auto flex justify-center items-center bg-[#efefef] border-[2px] border-[#d9d9d9] rounded-full">
                                <img
                                    className="w-[22px]"
                                    src={ArrowRight1}
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full pt-[90px] pb-[120px] bg-secondary-s1">
                <div className="max-w-[1180px] w-full mx-auto">
                    <h2 className="mb-10 text-[42px] text-white font-semibold font-gintoNormal leading-[50px]">
                        Experience Life @ Discord
                    </h2>
                    <div className="mt-[120px] px-[30px] grid grid-cols-3 gap-x-20 gap-y-10">
                        {experienceLifeAtDiscord.map((item, index) => {
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
                                    <p className="mb-5 text-xl font-ggsansNormal text-white leading-[30px]">
                                        {item.paragraph}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-[120px] bg-[#2c2f33]">
                <div className="relative max-w-[1180px] w-full mx-auto">
                    <div className="mt-[10px] mb-[120px] ">
                        <p className=" text-xl font-ggsansNormal text-white text-center leading-6">
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
                        <p className="text-xl font-ggsansNormal text-white text-center leading-6">
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
                <div className="relative max-w-[100vw] w-full h-[340px] flex overflow-hidden">
                    <div className="w-[640px] h-[340px] whitespace-nowrap">
                        <div className="mr-5"></div>
                    </div>
                    <div className="absolute w-16 h-16 my-auto pr-1 top-0 bottom-0 left-10 right-auto flex justify-center items-center bg-[rgba(35,39,42,.4)] rounded-full">
                        <img src={ArrowLeft2} alt="" />
                    </div>
                    <div className="absolute w-16 h-16 my-auto pl-1 top-0 bottom-0 left-auto right-10 flex justify-center items-center bg-[rgba(35,39,42,.4)] rounded-full">
                        <img src={ArrowRight2} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
