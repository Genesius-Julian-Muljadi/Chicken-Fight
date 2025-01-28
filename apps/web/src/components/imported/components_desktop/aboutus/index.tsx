// import NavBar from "../navbar/index";
// import Footer from "../footer/index";
import AboutUsMobile from "@/components_mobile/aboutus";
import CompanyHistory from "./companyhistory/index";
import CompanyCulture from "./companyculture";
import AboutUsTeam from "./team";

export default function AboutUs() {
    return (
        <div className="my-6">
            <div className="grid sm:hidden"><AboutUsMobile /></div>
            <div className="hidden sm:flex sm:flex-col sm:gap-6">
                <div><CompanyHistory /></div>
                <div><CompanyCulture /></div>
                <div><AboutUsTeam /></div>
            </div>
        </div>
    );
};