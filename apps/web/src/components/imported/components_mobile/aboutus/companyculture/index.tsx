import Image from "next/image";
import Culture from "../../../assets/culture.jpg";

export default function CompanyCultureMobile() {
    return (
        <div>
            <div className="flex flex-col gap-2 mx-auto w-[90vw]">
                <div className="">
                    <Image src={Culture} alt='cultureimg' className="h-[100%] w-[100%] rounded-md shadow-sm shadow-slate-700" />
                </div>
                <div className="p-4 mx-auto text-xl">
                    In our team, you'll see a culture of transparency, integrity, and an unwavering focus on doing what's right for each other and our customers. 
                </div>
            </div>
        </div>
    );
};