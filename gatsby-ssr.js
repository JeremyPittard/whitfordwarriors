import React from 'react'

export function onRenderBody({setBodyAttributes, setHeadComponents}) {
    setBodyAttributes({
        className: "has-navbar-fixed-top overflow-fix" //todo investigate why transition overflows
    })
};
