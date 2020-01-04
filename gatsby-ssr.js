exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
        className: "has-navbar-fixed-top overflow-fix" //todo investigate why transition overflows
    });
};
