// import NavBar from "../navbar/index";
// import Footer from "../footer/index";
import OurTeamMobile from "@/components_mobile/ourteam";
import Owners from "./owners";
import Staff from "./staff";

export default function OurTeam() {
    return (
        <div>
            <div className="grid grid-cols-1 grid-rows-1">
                <div className="col-start-1 row-start-1 grid sm:hidden"><OurTeamMobile /></div>
                <div className="col-start-1 row-start-1 hidden sm:flex sm:flex-col">
                    <Owners />
                    <Staff />
                </div>
            </div>
        </div>
    );
};