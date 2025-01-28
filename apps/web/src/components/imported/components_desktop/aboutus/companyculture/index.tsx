import Image from "next/image";
import Culture from "../../../assets/culture.jpg";

export default function CompanyCulture() {
    return (
        <div>
            <div className="grid grid-cols-9 grid-rows-1 gap-2 mx-auto h-[35rem] w-[95vw]">
                <div className="col-start-1 col-end-5 row-start-1 p-4 my-auto text-xl rounded-md shadow-sm shadow-slate-600 bg-[#fffcff]">
                    In our team, you'll see a culture of transparency, integrity, and an unwavering focus on doing what's right for each other and our customers.
                </div>
                <div className="col-start-5 col-end-10 row-start-1">
                    <Image src={Culture} alt='cultureimg' className="h-[100%] w-[100%] rounded-md shadow-sm shadow-slate-700" />
                </div>
            </div>
        </div>
    );
};