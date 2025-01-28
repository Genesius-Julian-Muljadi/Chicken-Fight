import Storefront from "../../../assets/IMG_8370.jpeg";
import Image from "next/image";

export default function CompanyHistoryMobile() {
    return (
        <div>
            <div className="flex flex-col gap-2 mx-auto w-[90vw]">
                <Image src={Storefront} alt='storefrontimg' className="h-[100%] w-[100%] rounded-md shadow-sm shadow-slate-700" />
                <div className="p-4 mx-auto text-xl">
                    Idolla stated from a small company in Rengasdengklok as a small gold jewelry store. The Jakarta branch was opened in 1986 and the business expanded to include diamonds and other miscellaneous services. Currently, Idolla is run by its 2nd generation owner(s).
                </div>
            </div>
        </div>
    );
};