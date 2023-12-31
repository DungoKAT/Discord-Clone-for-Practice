import PropTypes from "prop-types";

const SideItem = ({
    id,
    txt,
    classStyle,
    serverSelect,
    setServerSelect,
    tooltipText,
    setCreateServerModalOpen,
}) => {
    console.log(
        id === serverSelect && "ID: " + id + "  ServerSelect: " + serverSelect
    );
    return (
        <>
            <div className="relative flex items-center mb-2 px-3">
                <button
                    className={
                        id === serverSelect
                            ? "sidebar-link " + classStyle + " active"
                            : "sidebar-link " + classStyle
                    }
                    onClick={() => {
                        setServerSelect(id);
                        id === "plus" && setCreateServerModalOpen(true);
                    }}
                >
                    {txt}
                </button>
                <span
                    className={
                        id === serverSelect
                            ? "link-side-whitetab active"
                            : "link-side-whitetab"
                    }
                ></span>
                <span
                    className={
                        id === serverSelect
                            ? "tooltip show-right active"
                            : "tooltip show-right"
                    }
                >
                    <p>{tooltipText}</p>
                </span>
            </div>
        </>
    );
};

SideItem.propTypes = {
    id: PropTypes.string,
    txt: PropTypes.node,
    classStyle: PropTypes.string,
    serverSelect: PropTypes.string,
    setServerSelect: PropTypes.func,
    tooltipText: PropTypes.string,
    setCreateServerModalOpen: PropTypes.func,
};

export default SideItem;
