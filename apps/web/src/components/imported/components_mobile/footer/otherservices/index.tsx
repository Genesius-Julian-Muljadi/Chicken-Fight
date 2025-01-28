"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
// import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons/faFireFlameCurved";
import { faHammer, faCoins } from "@fortawesome/free-solid-svg-icons";
import { Wobble, WobbleRight, DoublePulse, AnimReset } from "@/components_desktop/footer/otherservices/iconanimationfunctions";
import "./style.css";

export default function OtherServicesMobile() {
    return (
        <div className="flex place-content-end text-right">
            <div className="flex flex-col gap-1">
                <div className="text-lg text-white font-serif font-semibold">Other Services</div>
                <div className="flex flex-col place-content-end gap-y-4 text-white">
                    <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {Wobble('polishingiconmobile')}} onMouseLeave={() => {AnimReset('polishingiconmobile')}}>
                        <div>Polishing</div>
                        <div>
                            <FontAwesomeIcon icon={faGem} style={{color: "#c1cde2",}} id="polishingiconmobile" />
                        </div>
                    </div>
                    {/* <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {SwingInBottom('smeltingiconmobile')}} onMouseLeave={() => {AnimReset('smeltingiconmobile')}}>
                        <div>Smelting</div>
                        <div>
                            <FontAwesomeIcon icon={faFireFlameCurved} style={{color: "#d0a65d",}} id="smeltingiconmobile" />
                        </div>
                    </div> */}
                    <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {WobbleRight('repairiconmobile')}} onMouseLeave={() => {AnimReset('repairiconmobile')}}>
                        <div>Repair</div>
                        <div>
                            <FontAwesomeIcon icon={faHammer} id="repairiconmobile" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {DoublePulse('finegoldtradingiconmobile')}} onMouseLeave={() => {AnimReset('finegoldtradingiconmobile')}}>
                        <div>Fine Gold Trading</div>
                        <div>
                            <FontAwesomeIcon icon={faCoins} style={{color: "#e6cd28",}} id="finegoldtradingiconmobile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};