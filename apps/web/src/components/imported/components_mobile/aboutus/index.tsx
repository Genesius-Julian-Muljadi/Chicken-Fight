import CompanyCultureMobile from "./companyculture";
import CompanyHistoryMobile from "./companyhistory";
import AboutUsTeamMobile from "./team";

export default function AboutUsMobile() {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div><CompanyHistoryMobile /></div>
                <div><CompanyCultureMobile /></div>
                <div><AboutUsTeamMobile /></div>
            </div>
        </div>
    );
};