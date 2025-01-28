import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import gmailIcon from "../../../assets/gmail.png";
import "./style.css";

export default function ContactUsMobile() {
    return (
        <div className="grid grid-rows-2 gap-y-3 h-14 w-36" id="contactusdivmobile">
            <div className="cold-start-1 row-start-1 text-lg text-white font-serif font-semibold">Contact Us</div>
            <div className="col-start-1 row-start-2 grid grid-cols-4 grid-rows-3 w-36 gap-x-4" id="socialmediagridmobile">
                <div className="col-start-1 row-start-3 grid grid-cols-1 grid-rows-1" id="emaillinkdivmobile">
                    <a href="mailto:meyliannymulyadi@yahoo.com" target="_blank" className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" id="emaillinkmobile">
                        {/* <div className="m-auto">
                            <img src={gmailIcon} alt="gmail-icon" className="h-4 m-auto" />
                        </div> */}
                    </a>
                    <div className="col-start-1 row-start-1 hidden sm:grid z-0 h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in" id="emailtextdivmobile">
                        <div className="rounded-md bg-white px-4 pt-1 pb-2 text-white font-semibold text-nowrap grid" id="emailtextmobile">
                            <a href="mailto:meyliannymulyadi@yahoo.com" target="_blank" className="m-auto">meyliannymulyadi@yahoo.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 row-start-3 grid grid-cols-1 grid-rows-1" id="email2linkdivmobile">
                    <a href="mailto:juliangenesiusmuljadi@gmail.com" target="_blank" className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" id="email2linkmobile">
                        <div className="m-auto p-1">
                            <Image src={gmailIcon} alt="gmail-icon" />
                        </div>
                    </a>
                    <div className="col-start-1 row-start-1 hidden sm:grid z-0 h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in" id="email2textdivmobile">
                        <div className="rounded-md px-4 pt-1 pb-2 text-black font-semibold text-nowrap grid" id="email2textmobile">
                            <a href="mailto:juliangenesiusmuljadi@gmail.com" target="_blank" className="m-auto">juliangenesiusmuljadi@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 row-start-3 grid grid-cols-1 grid-rows-1" id="whatsapplinkdivmobile">
                    <a href="tel:+6281289049098" target="_blank"
                        className="col-start-1 row-start-1 rounded-md size-7 m-auto grid peer z-20" id="whatsappiconmobile">
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} className="m-auto" id="whatsappiconimagemobile" />
                    </a>
                    <div className="col-start-1 row-start-1 hidden sm:grid z-0 h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in " id="whatsapptextdivmobile">
                        <div className="rounded-md pl-3 pr-4 pt-1 pb-2 text-white font-bold text-nowrap" id="whatsappphonenumbermobile">+62 812 8904 9098</div>
                    </div>
                </div>
                <div className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1" id="facebooklinkdivmobile">
                    <a href="https://www.facebook.com/idollajewelry/" target="_blank" id="facebooklinkmobile"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-2 row-start-1 grid grid-cols-1 grid-rows-1" id="tiktoklinkdivmobile">
                    <a href="https://www.tiktok.com/@idollajewelry/" target="_blank" id="tiktoklink"
                    className="col-start-1 row-start-1 z-20 peer rounded-lg grid size-[1.8rem]" />
                </div>
                <div className="col-start-3 row-start-1 grid grid-cols-1 grid-rows-1" id="instagramlinkdivmobile">
                    <a href="https://www.instagram.com/idollajewelry/" target="_blank" id="instagramlinkmobile"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-1 row-start-2 grid grid-cols-1 grid-rows-1" id="shopeedivmobile">
                    <a href="https://shopee.co.id/idollajewelry?entryPoint=ShopBySearch&searchKeyword=idolla" target="_blank" id="shopeelinkmobile"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-2 row-start-2 grid grid-cols-1 grid-rows-1" id="googlemapsdivmobile">
                    <a href="https://maps.app.goo.gl/TYdSyb6cf996btCy9?g_st=ic" target="_blank" id="googlemapslinkmobile"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-3 row-start-2 grid grid-cols-1 grid-rows-1" id="tokopediadivmobile">
                    <a href="https://tokopedia.link/idollajewelry" target="_blank" id="tokopedialinkmobile"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
            </div>
            {/* <div className="col-start-1 row-start-2 z-10 h-16 mt-16" id="coveringdivmobile"></div> */}
        </div>
    );
};