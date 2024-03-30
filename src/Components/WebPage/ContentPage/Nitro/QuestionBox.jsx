// import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";

const QuestionBox = ({
    question,
    answer,
    questionIndex,
    questionOpen,
    setQuestionOpen,
}) => {
    const handleClick = () => {
        if (questionOpen !== questionIndex) {
            setQuestionOpen(questionIndex);
        } else {
            setQuestionOpen(-1);
        }
    };

    // useEffect(() => {
    //     if (questionOpen === questionIndex) {
    //         document.addEventListener("click", handleClickOutside, true);
    //     }
    //     console.log(questionOpen === questionIndex);
    // }, [questionIndex, questionOpen]);

    // const refOne = useRef(null);

    // const handleClickOutside = (e) => {
    //     if (!refOne.current.contains(e.target)) {
    //         console.log("Click outside");
    //         console.log(refOne.current);
    //         setQuestionOpen(-1);
    //     } else {
    //         console.log("Click inside");
    //     }
    // };

    return (
        <div
            className={
                (questionOpen === questionIndex
                    ? "bg-secondary-s1 text-white"
                    : "bg-primary-w5 text-black") +
                " relative inline-block w-full h-fit mb-4 rounded-lg transition-all"
            }
        >
            <div
                className="relative w-full py-6 pl-6 pr-[60px] flex justify-between cursor-pointer"
                onClick={() => {
                    handleClick();
                }}
            >
                <p className=" text-xl font-semibold font-ggsansNormal leading-8">
                    {question}
                </p>
                <AiOutlinePlus
                    className={
                        (questionOpen === questionIndex
                            ? "text-primary-w3 rotate-45"
                            : "rotate-0") +
                        " absolute top-[29px] bottom-[29px] left-auto right-6 text-[22px] transition-all"
                    }
                />
            </div>
            <nav
                className={
                    (questionOpen === questionIndex ? "block" : "hidden") +
                    " px-6"
                }
            >
                <p className=" -mt-3 mb-6 pr-10 font-ggsansNormal">{answer}</p>
            </nav>
        </div>
    );
};

QuestionBox.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    questionIndex: PropTypes.number.isRequired,
    questionOpen: PropTypes.number.isRequired,
    setQuestionOpen: PropTypes.func.isRequired,
};

export default QuestionBox;
