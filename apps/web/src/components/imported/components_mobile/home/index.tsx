import CompanyOverviewMobile from "./companyoverview";
import HeroMobile from "./hero";
import ProductsServicesMobile from "./productsservices";
import TestimonialsMobile from "./testimonials";

export default function HomeMobile() {
    return (
        <div>
            <div className="flex flex-col gap-6">
                <HeroMobile />
                <CompanyOverviewMobile />
                <ProductsServicesMobile />
                <TestimonialsMobile />
            </div>
        </div>
    );
};