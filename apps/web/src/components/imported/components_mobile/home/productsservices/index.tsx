import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function ProductsServicesMobile() {
    return (
        <div className="text-center" id="homepscontainerdivmobile">
            <div className="flex flex-col gap-3 mx-2">
                <div className="grid grid-cols-2 grid-rows-1 gap-2 *:rounded-lg" id="homegolddiamondsizedivmobile">
                    <button className="col-start-1 row-start-1 grid grid-cols-3 grid-rows-5" id="homegolddivmobile">
                        <div className="col-start-1 col-end-4 row-start-1 row-end-2" />
                        <div className="col-start-3 row-start-1 font-bold text-black text-lg font-serif text-right my-auto mr-4">
                            Gold
                        </div>
                    </button>
                    <button className="col-start-2 row-start-1 grid grid-cols-2 grid-rows-5" id="homediamonddivmobile">
                        <div className="col-start-1 row-start-5 font-bold text-black text-lg font-serif text-left my-auto ml-4">
                            Diamonds
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-2 mx-1 *:grid *:grid-cols-1 *:grid-rows-6 *:rounded text-sm font-bold font-serif" id="homejewelrytypesdivmobile">
                    <button className="col-start-1 row-start-1" id="homeringimgmobile">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-1">Rings</div>
                    </button>
                    <button className="col-start-2 row-start-1" id="homependantimgmobile">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-1">Pendants</div>
                    </button>
                    <button className="col-start-3 row-start-1" id="homeearringsimgmobile">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-1">Earrings</div>
                    </button>
                    <button className="col-start-1 row-start-2" id="homenecklaceimgmobile">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-1">Necklaces</div>
                    </button>
                    <button className="col-start-2 row-start-2" id="homebraceletimgmobile">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-1">Bracelets</div>
                    </button>
                    <button className="col-start-3 row-start-2" id="homebroochimgmobile">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-1">Brooches</div>
                    </button>
                </div>
                <Link href="/catalogue"
                className="mx-auto mb-3 pl-4 pr-4 py-1 flex flex-row gap-2 rounded-lg border border-black font-mono" id="homecataloguedivmobile">
                    <div>Catalogue</div>
                    <div>
                        <FontAwesomeIcon icon={faArrowRight} className="mt-1" />
                    </div>
                </Link>
            </div>
        </div>
    )
}