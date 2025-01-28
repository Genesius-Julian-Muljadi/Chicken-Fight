import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./style.css"

export default function ProductsServices() {
    return (
        <div className="text-center mx-20 mt-8" id="homepscontainerdiv">
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 grid-rows-1 gap-6 *:rounded-lg">
                    <button className="col-start-1 row-start-1 grid grid-cols-3 grid-rows-4" id="homegolddiv">
                        <div className="col-start-1 col-end-5 row-start-1 row-end-5" id="homegolddiamondsizediv" />
                        <div className="col-start-3 row-start-1 font-bold text-black text-4xl font-serif my-auto">
                            Gold
                        </div>
                    </button>
                    <button className="col-start-2 row-start-1 grid grid-cols-2 grid-rows-4" id="homediamonddiv">
                        <div className="col-start-1 row-start-4 font-bold text-black text-4xl font-serif my-auto pr-7">
                            Diamonds
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-6 mx-10 h-[34rem] *:grid *:grid-cols-1 *:grid-rows-6 *:rounded text-lg font-bold font-serif" id="homejewelrytypesdiv">
                    <button className="col-start-1 row-start-1" id="homeringimg">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-4">Rings</div>
                    </button>
                    <button className="col-start-2 row-start-1" id="homependantimg">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-4">Pendants</div>
                    </button>
                    <button className="col-start-3 row-start-1" id="homeearringsimg">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-4">Earrings</div>
                    </button>
                    <button className="col-start-1 row-start-2" id="homenecklaceimg">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-4">Necklaces</div>
                    </button>
                    <button className="col-start-2 row-start-2" id="homebraceletimg">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-4">Bracelets</div>
                    </button>
                    <button className="col-start-3 row-start-2" id="homebroochimg">
                        <div className="col-start-1 row-start-1 row-end-6"></div>
                        <div className="col-start-1 row-start-6 row-end-7 my-auto text-left pl-4">Brooches</div>
                    </button>
                </div>
                <div className="mx-auto mb-5">
                    <Link href="/catalogue"
                    className="pl-4 pr-4 py-1 flex flex-row gap-2 rounded-lg border border-black font-mono" id="homecataloguediv">
                        <div>Catalogue</div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} className="mt-1" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};