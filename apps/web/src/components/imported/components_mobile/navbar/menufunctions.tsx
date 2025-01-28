"use client";

import { toggleMenu } from "@/redux/slices/togglemenu";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function MenuButton1() {
    // const m = document.getElementById("navbarmenumobile") as HTMLDivElement;
    // console.log(m);
    // const [menu, setMenu] = useState(m.style.display);
    let b = useSelector((state: {TMSlice: {menuIsOpen: Boolean | null}}) => state.TMSlice.menuIsOpen);
    const dispatch = useDispatch();

    // const openMenu = () => {
        // menu.style.animation = '';
        // setMenu('grid');
        // console.log(menu);
        // menu.style.animation = 'slideInLeft 0.3s ease 0s 1 normal forwards';
        // const m = document.getElementById("navbarmenumobile") as HTMLElement;
        // m.style.display = 'grid';
    // };

    return (
        <button onClick={() => {
            // console.log(b)
            if (b === true || b === null) {
                dispatch(toggleMenu('reset'));
                // console.log('didreset');
                setTimeout(() => {dispatch(toggleMenu('open'))}, 10);
                // console.log('didopen');
            } else if (b === false) {
                dispatch(toggleMenu('open'));
            };
        }} className="my-auto" id="navbarmenubuttonmobile">
        {/* <button onClick={() => {(b) ? dispatch(toggleMenu('close')) : dispatch(toggleMenu('open'))}} className="my-auto" id="navbarmenubuttonmobile"> */}
        {/* <button onClick={() => openMenu()} className="my-auto" id="navbarmenubuttonmobile"> */}
        {/* <button className="my-auto" id="navbarmenubuttonmobile"> */}
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className="size-4" />
        </button>
    );
};

export function MenuButton2() {
    let b = useSelector((state: {TMSlice: {menuIsOpen: Boolean | null}}) => state.TMSlice.menuIsOpen);
    const dispatch = useDispatch();

    // const closeMenu = () => {
        // const menu = document.getElementById("navbarmenumobile") as HTMLDivElement;
        // menu.style.display = 'none';
        // console.log(menu.style.display);
        // menu.style.animation = '';
        // menu.style.animation = 'slideInLeft 0.3s ease 0s 2 reverse forwards';
        // menu.style.animation = '';
    // };

    return (
        <button onClick={() => {
            // console.log(b);
            if (b === true) {
                dispatch(toggleMenu('close'));
            } else if (b === false || b === null) {
                dispatch(toggleMenu('reset'));
                setTimeout(() => {dispatch(toggleMenu('close'))}, 10);
            };
        }} className="my-auto" id="navbarmenubuttonmobile">
        {/* <button onClick={() => {(b) ? dispatch(toggleMenu('close')) : dispatch(toggleMenu('open'))}} className="my-auto" id="navbarmenubutton2mobile"> */}
        {/* <button onClick={() => closeMenu()} className="my-auto" id="navbarmenubutton2mobile"> */}
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className="size-4" />
        </button>
    )
}

export function BackgroundDisableMobile() {
    let b = useSelector((state: {TMSlice: {menuIsOpen: Boolean | null}}) => state.TMSlice.menuIsOpen);
    const dispatch = useDispatch();

    return (
        <div className="fixed hidden bg-slate-600 h-[100vh] w-screen mt-[-5vh] z-40 opacity-25" id="fullcoveringdivmobile"
            onClick={() => {(b) ? dispatch(toggleMenu('close')) : dispatch(toggleMenu('open'))}} />
    );
};

// export function MenuReset() {
//     const dispatch = useDispatch();
//     dispatch(toggleMenu('close'));
// }