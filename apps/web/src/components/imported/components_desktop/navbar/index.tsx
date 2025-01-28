"use client";

import Link from "next/link";
import Image from "next/image";
import IDFlag from "../../assets/indonesiaflag.png";
import USFlag from "../../assets/americaflag.png";
import NavBarMobile from "@/components_mobile/navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./style.css";


export default function NavBar() {
    return (
        <Provider store={store}>
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="col-start-1 row-start-1 flex sm:hidden"><NavBarMobile /></div>
            <div className="col-start-1 row-start-1 hidden sm:grid sm:grid-cols-12 rounded-b-sm shadow-md shadow-red-950 text-white mb-1" id="navbarcontainer">
                <div className="col-start-1 col-end-6 flex flex-row gap-4 h-12 text-left *:rounded-lg">
                    <Link href="/" className="ml-5 hover:animate-slight-dim" id="idollalogo"></Link>
                    <div className="my-auto ml-6 px-3 hover:bg-orange-950 hover:bg-opacity-35 active:bg-opacity-55" id="aboutustitle">
                        <Link href="/about-us">About Us</Link>
                    </div>
                    <div className="my-auto ml-6 px-3 hover:bg-orange-950 hover:bg-opacity-35 active:bg-opacity-55" id="ourteamtitle">
                        <Link href="/our-team">Our Team</Link>
                    </div>
                </div>
                <div className="col-start-6 col-end-8 my-auto text-center rounded-lg hover:bg-orange-950 hover:bg-opacity-35 active:bg-opacity-55" id="cataloguetitle">
                    <Link href="/catalogue" className="font-mono">Catalogue</Link>
                </div>
                <div className="col-start-12 col-end-13 grid grid-rows-2" id="id/entitle">
                    <div className="col-start-1 row-start-1 m-auto grid grid-cols-2 grid-rows-1 gap-2 *:m-auto">
                        <Image src={IDFlag} alt="(idflag)" className="rounded-sm" id="idflag" />
                        <div>ID</div>
                    </div>
                    <div className="col-start-1 row-start-2 m-auto grid grid-cols-2 grid-rows-1 gap-2 *:m-auto">
                        <Image src={USFlag} alt="(usflag)" className="rounded-sm" id="usflag" />  
                        <div>EN</div>
                    </div>
                </div>
            </div>
        </div>
        </Provider>
    );
};