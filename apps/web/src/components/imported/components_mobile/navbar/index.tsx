import Link from "next/link";
import Image from "next/image";
import IDFlag from "../../assets/indonesiaflag.png";
import USFlag from "../../assets/americaflag.png";
import { MenuButton1, MenuButton2, BackgroundDisableMobile } from "./menufunctions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import "../../index.css";

export default function NavBarMobile() {
    let b = useSelector((state: {TMSlice: {menuIsOpen: Boolean | null}}) => state.TMSlice.menuIsOpen);

    useEffect(() => {
        const menu = document.getElementById("navbarmenumobile") as HTMLDivElement;
        const cover = document.getElementById("fullcoveringdivmobile") as HTMLDivElement;
        // console.log(menu);
        if (b === true) {
            cover.style.display = 'grid';
            menu.style.display = 'grid';
            menu.style.animation = 'slideInLeft 0.3s ease 0s 1 normal forwards';
            setTimeout(() => {menu.style.animation = ''}, 310);
        } else if (b === false) {
            // menu.style.animation = '';
            cover.style.display = 'none';
            menu.style.animation = 'slideInLeft 0.3s ease 0s 1 reverse forwards';
            setTimeout(() => {menu.style.display = 'none'}, 310);
            // console.log(menu.style.animation);
        } else {
            // console.log('currentlynull');
        };
    });

    useEffect(() => {
        const menu = document.getElementById("navbarmenumobile") as HTMLDivElement;
        const cover = document.getElementById("fullcoveringdivmobile") as HTMLDivElement;
        cover.style.display = 'none';
        menu.style.display = 'none';

        // if (b === null) {
        //     cover.style.display = 'none';
        //     menu.style.display = 'none';
            // b = false;
            // cover.click;
            // MenuReset();
            // cover.style.display = 'none';
            // menu.style.animation = 'slideInLeft 0.3s ease 0s 1 reverse forwards';
            // setTimeout(() => {console.log(menu.style.display); menu.style.display = 'none'}, 310);
        // }
    }, [])

    return (
        <div className="">
            <div className="grid grid-cols-3 grid-rows-1 gap-20 h-[5vh] rounded-b-sm shadow-sm shadow-red-950" id="navbarcontainermobile">
                <div className="col-start-1 row-start-1 flex m-auto ml-2 px-1 rounded-md hover:bg-orange-950 hover:bg-opacity-35 active:bg-opacity-55">
                    <MenuButton1 />
                </div>
                <div className="col-start-2 row-start-1 m-auto rounded-lg hover:bg-orange-950 hover:bg-opacity-35 active:bg-opacity-55">
                    <Link href="/catalogue" className="font-semibold text-white">Catalogue</Link>
                </div>
            </div>
            <div className="absolute z-50 bg-slate-400 rounded-br-md" id="navbarmenumobile">
                <div className="flex flex-col gap-2 ml-2 mt-[0.27rem]">
                    <div className="px-1 rounded-md w-6 hover:bg-slate-700 hover:bg-opacity-35 active:bg-opacity-55">
                        <MenuButton2 />
                    </div>
                    <hr className="mr-6" />
                    <Link href="/" className="pl-1 rounded w-24 hover:bg-slate-700 hover:bg-opacity-35 active:bg-opacity-55">
                        <div>Home</div>
                    </Link>
                    <hr className="mr-6" />
                    <Link href="/about-us" className="pl-1 rounded w-24 hover:bg-slate-700 hover:bg-opacity-35 active:bg-opacity-55">
                        <div>About Us</div>
                    </Link>
                    <hr className="mr-6" />
                    <Link href="/our-team" className="pl-1 rounded w-24 hover:bg-slate-700 hover:bg-opacity-35 active:bg-opacity-55">
                        <div>Our Team</div>
                    </Link>
                    <hr className="mr-6" />
                    <Link href="/catalogue" className="pl-1 rounded w-24 hover:bg-slate-700 hover:bg-opacity-35 active:bg-opacity-55">
                        <div>Catalogue</div>
                    </Link>
                    <hr className="mr-6" />
                    <div className="flex flex-row gap-4 mr-8 mt-1">
                        <div className="grid grid-cols-1 grid-rows-2 gap-2 ml-1">
                            <button>
                                <Image src={IDFlag} alt="(idflag)" className="rounded-sm" id="idflagmobile" />
                            </button>
                            <button>
                                <Image src={USFlag} alt="(usflag)" className="rounded-sm" id="usflagmobile" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundDisableMobile />
        </div>
    );
};