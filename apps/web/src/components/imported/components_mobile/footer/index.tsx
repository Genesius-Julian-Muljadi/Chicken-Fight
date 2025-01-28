import ContactUsMobile from "./contactus";
import OtherServicesMobile from "./otherservices";

export default function FooterMobile() {
    return (
        <div>
            <div className="bg-gray-600 h-44 w-screen">
                <div className="grid grid-cols-9 grid-rows-1 gap-2">
                    <div className="col-start-1 col-end-5 row-start-1 my-3">
                        <OtherServicesMobile />
                    </div>
                    <div className="col-start-5 col-end-6 grid h-20 rotate-90">
                        <hr className="my-auto w-36" />
                    </div>
                    <div className="col-start-6 col-end-10 row-start-1 my-3">
                        <ContactUsMobile />
                    </div>
                </div>
            </div>
        </div>
    );
};