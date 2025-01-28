import { IAsset } from "@/contentful/types/contentful.types";
import { getOwnerProfilesContentful } from "@/contentful/functions/contentful.functions";
import { ParseRichText } from "@/contentful/functions/contentful.functions";
import "./style.css";

export default async function Owners() {
    const profiles = await getOwnerProfilesContentful();

    return (
        <div className="flex">
            <div className="mx-auto flex flex-col gap-4 mt-6">
                <div className="flex">
                    <span className="m-auto text-xl font-semibold">Owners</span>
                </div>
                <div className="mx-auto flex flex-row max-h-[34.5rem] max-w-[87vw] gap-6 place-content-center" id="ownerprofilecontainerdiv">
                    {profiles &&
                        profiles.map((profile, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            <div className="h-[80%]">
                                <img className="h-[100%] w-[100%] rounded-t-xl"
                                src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} alt={`${profile.fields.name}img`} />
                            </div>
                            <div className="text-left text-sm mx-auto w-[80%] flex flex-col">
                                <p className="text-center text-lg font-serif">{profile.fields.name}</p>
                                <p className="">{profile.fields.experience}</p>
                                <ParseRichText document={profile.fields.contactInfo}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};