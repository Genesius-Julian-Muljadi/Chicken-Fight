// import NavBar from "../navbar/index";
// import Footer from "../footer/index";
import HomeMobile from "@/components_mobile/home";
import HeroSection from "./hero/index";
import CompanyOverview from "./companyoverview/index";
import ProductsServices from "./productsservices/index";
import "./style.css";
import Testimonials from "./testimonials";

export default function HomeView() {
    return (
        <div className="flex flex-col gap-4">
            <p>My first project. Front-end-only using Next.js, Tailwind CSS, & Contentful for the catalogue</p>
            <div className="grid grid-cols-1 grid-rows-1" id="background">
                <div className="col-start-1 row-start-1 flex sm:hidden"><HomeMobile /></div>
                <div className="col-start-1 row-start-1 hidden sm:grid mt-6">
                    <div className="grid grid-cols-4 grid-rows-1 gap-4 mx-32">
                        <div className="col-start-1 row-start-1 col-end-3"><HeroSection /></div>
                        <div className="col-start-3 row-start-1 col-end-5"><CompanyOverview /></div>
                    </div>
                    <div><ProductsServices /></div>
                    <div className="w-[80vw] mx-auto mb-6"><Testimonials /></div>
                </div>
            </div>
        </div>
    );
};