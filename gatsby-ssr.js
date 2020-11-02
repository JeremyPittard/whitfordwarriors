import React from 'react'

export function onRenderBody({setBodyAttributes, setHeadComponents}) {
    setBodyAttributes({
        className: "has-navbar-fixed-top overflow-fix" //todo investigate why transition overflows
    }),
    setHeadComponents([
        <script async defer data-website-id="e7e75cf0-5545-4536-b880-e4a1180f5c73" src="https://wafc-analytics.herokuapp.com/umami.js" />
    ])
};
