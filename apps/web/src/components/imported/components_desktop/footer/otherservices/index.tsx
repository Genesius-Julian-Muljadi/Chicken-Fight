"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
// import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons/faFireFlameCurved";
import { faHammer, faCoins } from "@fortawesome/free-solid-svg-icons";
import { Wobble, WobbleRight, DoublePulse, AnimReset } from "./iconanimationfunctions";
import "./style.css";

export default function OtherServices() {
    return (
        <div className="flex place-content-end text-right">
            <div className="flex flex-col gap-3">
                <div className="text-lg text-white font-serif font-semibold">Other Services</div>
                <div className="flex flex-col place-content-end gap-y-4 text-white">
                    <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {Wobble('polishingicon')}} onMouseLeave={() => {AnimReset('polishingicon')}}>
                        <div>Polishing</div>
                        <div>
                            <FontAwesomeIcon icon={faGem} style={{color: "#c1cde2",}} id="polishingicon" />
                        </div>
                    </div>
                    {/* <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {SwingInBottom('smeltingicon')}} onMouseLeave={() => {AnimReset('smeltingicon')}}>
                        <div>Smelting</div>
                        <div>
                            <FontAwesomeIcon icon={faFireFlameCurved} style={{color: "#d0a65d",}} id="smeltingicon" />
                        </div>
                    </div> */}
                    <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {WobbleRight('repairicon')}} onMouseLeave={() => {AnimReset('repairicon')}}>
                        <div>Repair</div>
                        <div>
                            <FontAwesomeIcon icon={faHammer} id="repairicon" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 px-2 ml-auto rounded-md shadow-sm shadow-zinc-900" onMouseEnter={() => {DoublePulse('finegoldtradingicon')}} onMouseLeave={() => {AnimReset('finegoldtradingicon')}}>
                        <div>Fine Gold Trading</div>
                        <div>
                            <FontAwesomeIcon icon={faCoins} style={{color: "#e6cd28",}} id="finegoldtradingicon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};