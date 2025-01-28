import Image from "next/image";
import COGrid from "../../../assets/cogrid.jpg"
import "./style.css"

export default function CompanyOverview() {
    return (
        <div className="rounded-3xl" id="cocontainercontainer">
            <div className="flex flex-col gap-3 px-10 py-9" id="cocontainer">
                <div className="text-4xl" id="homeslogan">
                    FOR THOSE WHO DARE TO SHINE BRIGHT
                </div>
                <div id="cogriddiv"></div>
                <div className="text-wrap text-left mx-2 font-bold" id="cotext">
                    Idolla trades quality gold and diamond jewelry at competitive prices. Whether you're buying or selling in-store or at-home, you'll be sure to get the best deal on the market!
                </div>
            </div>
        </div>
    );
};