import OwnersMobile from "./owners";
import StaffMobile from "./staff";

export default function OurTeam() {
    return (
        <div className="my-6">
            <div className="flex flex-col">
                <OwnersMobile />
                <StaffMobile />
            </div>
        </div>
    );
};