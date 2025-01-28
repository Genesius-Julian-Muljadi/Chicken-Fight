import Storefront from "../../../assets/IMG_8370.jpeg";
import Image from "next/image";

export default function CompanyHistory() {
    return (
        <div>
            <div className="grid grid-cols-9 grid-rows-1 gap-2 mx-auto h-[35rem] w-[95vw]">
                <div className="col-start-1 col-end-6 row-start-1">
                    {/* <img src="../../../assets/IMG_8370.jpeg" className="h-[100%] w-[100%]"></img> */}
                    <Image src={Storefront} alt='storefrontimg' className="h-[100%] w-[100%] rounded-md shadow-sm shadow-slate-700" />
                </div>
                <div className="col-start-6 col-end-10 row-start-1 p-4 my-auto text-xl rounded-md shadow-sm shadow-slate-600 bg-[#fffcff]">Idolla stated from a small company in Rengasdengklok as a small gold jewelry store. The Jakarta branch was opened in 1986 and the business expanded to include diamonds and other miscellaneous services. Currently, Idolla is run by its 2nd generation owner(s).</div>
            </div>
        </div>
    );
};