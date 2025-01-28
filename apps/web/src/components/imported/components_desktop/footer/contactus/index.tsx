import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import gmailIcon from "../../../assets/gmail.png";
import "./style.css";

export default function ContactUs() {
    return (
        <div className="grid grid-cols-7 gris-rows-3 gap-y-2 mt-[-0.8rem]">
            <div className="col-start-1 col-end-4 row-start-1 flex flex-col gap-1" id="socialmediadiv">
                <div className="text-lg text-white font-serif font-semibold">Social Media</div>
                <div className="flex flex-row gap-3">
                    <div className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1" id="facebooklinkdiv">
                        <a href="https://www.facebook.com/idollajewelry/" target="_blank" id="facebooklink"
                        className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                    </div>
                    <div className="col-start-2 row-start-1 grid grid-cols-1 grid-rows-1" id="tiktoklinkdiv">
                        <a href="https://www.tiktok.com/@idollajewelry/" target="_blank" id="tiktoklink"
                        className="col-start-1 row-start-1 z-20 peer rounded-lg grid size-[1.8rem]" />
                    </div>
                    <div className="col-start-3 row-start-1 grid grid-cols-1 grid-rows-1" id="instagramlinkdiv">
                        <a href="https://www.instagram.com/idollajewelry/" target="_blank" id="instagramlink"
                        className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                    </div>
                </div>
            </div>
            <div className="col-start-1 col-end-4 row-start-2 flex flex-col gap-1" id="onlineretailersdiv">
                <div className="text-lg text-white font-serif font-semibold">Online Retailers</div>
                <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-2">
                        <div className="col-start-1 row-start-2 grid grid-cols-1 grid-rows-1" id="shopeediv">
                            <a href="https://shopee.co.id/idollajewelry?entryPoint=ShopBySearch&searchKeyword=idolla" target="_blank" id="shopeelink"
                            className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                        </div>
                        <div className="text-white">Shopee</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="col-start-3 row-start-2 grid grid-cols-1 grid-rows-1" id="tokopediadiv">
                            <a href="https://tokopedia.link/idollajewelry" target="_blank" id="tokopedialink"
                            className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                        </div>
                        <div className="text-white">Tokopedia</div>
                    </div>
                </div>
            </div>
            <div className="col-start-4 col-end-8 row-start-1 row-end-4 flex flex-col gap-1" id="findusdiv">
                <div className="text-lg text-white font-serif font-semibold">Find Us</div>
                <div className="grid grid-cols-1 grid-rows-1" id="googlemapsdiv">
                    <a href="https://maps.app.goo.gl/TYdSyb6cf996btCy9?g_st=ic" target="_blank" id="googlemapslink"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-40" />
                </div>
            </div>
            <div className="col-start-1 col-end-4 row-start-3 flex flex-col gap-1 h-14 w-36" id="contactusdiv">
                <div className="text-lg text-white font-serif font-semibold">Contact Us</div>
                <div className="grid grid-cols-4 grid-rows-1 w-36 gap-x-4">
                    <div className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1" id="emaillinkdiv">
                        <a href="mailto:meyliannymulyadi@yahoo.com" target="_blank" className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" id="emaillink">
                            {/* <div className="m-auto">
                                <img src={gmailIcon} alt="gmail-icon" className="h-4 m-auto" />
                            </div> */}
                        </a>
                        <div className="col-start-1 row-start-1 hidden sm:grid z-0 h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in" id="emailtextdiv">
                            <div className="rounded-md bg-white px-4 pt-1 pb-2 text-white font-semibold text-nowrap grid" id="emailtext">
                                <a href="mailto:meyliannymulyadi@yahoo.com" target="_blank" className="m-auto">meyliannymulyadi@yahoo.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 row-start-1 grid grid-cols-1 grid-rows-1" id="email2linkdiv">
                        <a href="mailto:juliangenesiusmuljadi@gmail.com" target="_blank" className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" id="email2link">
                            <div className="m-auto p-1">
                                <Image src={gmailIcon} alt="gmail-icon" />
                            </div>
                        </a>
                        <div className="col-start-1 row-start-1 hidden sm:grid z-0 h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in" id="email2textdiv">
                            <div className="rounded-md px-4 pt-1 pb-2 text-black font-semibold text-nowrap grid" id="email2text">
                                <a href="mailto:juliangenesiusmuljadi@gmail.com" target="_blank" className="m-auto">juliangenesiusmuljadi@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-3 row-start-1 grid grid-cols-1 grid-rows-1" id="whatsapplinkdiv">
                        <div className="col-start-1 row-start-1 rounded-md size-7 grid peer z-20" id="whatsappicon">
                            <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} className="m-auto" id="whatsappiconimage" />
                        </div>
                        <div className="col-start-1 row-start-1 hidden sm:grid z-0 h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in " id="whatsapptextdiv">
                            <div className="rounded-md pl-3 pr-4 pt-1 pb-2 text-white font-bold text-nowrap" id="whatsappphonenumber">+62 812 8904 9098</div>
                        </div>
                    </div>
                    {/* <div className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1" id="facebooklinkdiv">
                        <a href="https://www.facebook.com/idollajewelry/" target="_blank" id="facebooklink"
                        className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                    </div>
                    <div className="col-start-2 row-start-1 grid grid-cols-1 grid-rows-1" id="tiktoklinkdiv">
                        <a href="https://www.tiktok.com/@idollajewelry/" target="_blank" id="tiktoklink"
                        className="col-start-1 row-start-1 z-20 peer rounded-lg grid size-[1.8rem]" />
                    </div>
                    <div className="col-start-3 row-start-1 grid grid-cols-1 grid-rows-1" id="instagramlinkdiv">
                        <a href="https://www.instagram.com/idollajewelry/" target="_blank" id="instagramlink"
                        className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                    </div> */}
                    {/* <div className="col-start-1 row-start-2 grid grid-cols-1 grid-rows-1" id="shopeediv">
                        <a href="https://shopee.co.id/idollajewelry?entryPoint=ShopBySearch&searchKeyword=idolla" target="_blank" id="shopeelink"
                        className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                    </div>
                    <div className="col-start-2 row-start-2 grid grid-cols-1 grid-rows-1" id="googlemapsdiv">
                        <a href="https://maps.app.goo.gl/TYdSyb6cf996btCy9?g_st=ic" target="_blank" id="googlemapslink"
                        className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                    </div>
                    <div className="col-start-3 row-start-2 grid grid-cols-1 grid-rows-1" id="tokopediadiv">
                        <a href="https://tokopedia.link/idollajewelry" target="_blank" id="tokopedialink"
                        className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                    </div> */}
                    <div className="col-start-1 row-start-1 z-10 h-12 w-[21rem] mt-[-0.5rem] ml-[-8rem]" id="coveringdiv"></div>
                </div>
            </div>
        </div>
    );
};