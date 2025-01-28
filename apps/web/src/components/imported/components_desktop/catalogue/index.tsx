// "use client";

// import NavBar from "../navbar/index";
// import Footer from "../footer/index";
import { getGRingsContentful,
        getGPendantsContentful,
        getGEarringsContentful,
        getGNecklacesContentful,
        getGBraceletsContentful,
        getGBroochesContentful,
        getDRingsContentful,
        getDPendantsContentful,
        getDEarringsContentful,
        getDNecklacesContentful,
        getDBraceletsContentful,
        getDBroochesContentful,
        ParseRichText } from "@/contentful/functions/contentful.functions";
import { IAsset } from "@/contentful/types/contentful.types";
import CatalogueMobile from "@/components_mobile/catalogue";
import "./style.css";

export default async function Catalogue() {
    const grings = await getGRingsContentful();
    const gpendants = await getGPendantsContentful();
    const gearrings = await getGEarringsContentful();
    const gnecklaces = await getGNecklacesContentful();
    const gbracelets = await getGBraceletsContentful();
    const gbrooches = await getGBroochesContentful();
    const drings = await getDRingsContentful();
    const dpendants = await getDPendantsContentful();
    const dearrings = await getDEarringsContentful();
    const dnecklaces = await getDNecklacesContentful();
    const dbracelets = await getDBraceletsContentful();
    const dbrooches = await getDBroochesContentful();

    return (
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="grid sm:hidden col-start-1 row-start-1"><CatalogueMobile /></div>
            <div className="hidden sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-2 mx-auto w-[86rem]">
                <div id="cataloguegolddiv">
                    <div className="grid grid-cols-1 grid-rows-1 h-12 mt-2">
                        <div className="col-start-1 row-start-1 my-auto text-xl font-semibold pl-[0.65rem]">Gold</div>
                        <div className="col-start-1 row-start-1 mt-[2.2rem] italic text-sm pl-[0.65rem]">Prices depend on daily gold value. Please contact us for more details.</div>
                        {/* <div className="col-start-1 row-start-1 bg-green-400 size-4" onClick={() => {console.log(grings.items[0])}}></div> */}
                    </div>
                    <div className="grid grid-cols-1 grid-rows-6 gap-4">
                        <div className="cataloguejewelrytypedivs">
                            <div>Rings</div>
                            <div className="flex flex-row">
                            {grings &&
                                grings.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Pendants</div>
                            <div className="flex flex-row">
                            {gpendants &&
                                gpendants.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Earrings</div>
                            <div className="flex flex-row">
                            {gearrings &&
                                gearrings.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Necklaces</div>
                            <div className="flex flex-row">
                            {gnecklaces &&
                                gnecklaces.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Bracelets</div>
                            <div className="flex flex-row">
                            {gbracelets &&
                                gbracelets.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Brooches</div>
                            <div className="flex flex-row">
                            {gbrooches &&
                                gbrooches.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cataloguediamonddiv">
                    <div className="grid grid-cols-1 grid-rows-1 h-12 mt-2">
                        <div className="col-start-1 row-start-1 my-auto text-xl font-semibold pl-[0.65rem]">Diamonds</div>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-6 gap-4">
                        <div className="cataloguejewelrytypedivs">
                            <div>Rings</div>
                            <div className="flex flex-row">
                            {drings &&
                                drings.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left font-semibold">{j.fields.price}</p>
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Pendants</div>
                            <div className="flex flex-row">
                            {dpendants &&
                                dpendants.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left font-semibold">{j.fields.price}</p>
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Earrings</div>
                            <div className="flex flex-row">
                            {dearrings &&
                                dearrings.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left font-semibold">{j.fields.price}</p>
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Necklaces</div>
                            <div className="flex flex-row">
                            {dnecklaces &&
                                dnecklaces.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left font-semibold">{j.fields.price}</p>
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Bracelets</div>
                            <div className="flex flex-row">
                            {dbracelets &&
                                dbracelets.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left font-semibold">{j.fields.price}</p>
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="cataloguejewelrytypedivs">
                            <div>Brooches</div>
                            <div className="flex flex-row">
                            {dbrooches &&
                                dbrooches.map((j, idx) => (
                                <div key={idx}>
                                    <div className="cataloguejewelryimages">
                                        <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} alt={`${j.fields.itemCode}img`} />
                                    </div>
                                    <div className="text-left mx-auto w-[90%] flex flex-col">
                                        <p className="text-left font-semibold">{j.fields.price}</p>
                                        <p className="text-left">{j.fields.itemCode}</p>
                                        <ParseRichText document={j.fields.description}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};