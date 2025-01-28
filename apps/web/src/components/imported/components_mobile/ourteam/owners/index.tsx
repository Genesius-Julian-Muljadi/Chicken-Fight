import { IAsset } from "@/contentful/types/contentful.types";
import { getOwnerProfilesContentful } from "@/contentful/functions/contentful.functions";
import { ParseRichText } from "@/contentful/functions/contentful.functions";
import "./style.css";

export default async function OwnersMobile() {
    const profiles = await getOwnerProfilesContentful();

    return (
        <div className="flex">
            <div className="mx-auto flex flex-col gap-4">
                <div className="flex">
                    <span className="m-auto text-xl font-semibold">Owners</span>
                </div>
                <div className="mx-auto flex flex-col w-[69vw] gap-6 place-content-center" id="ownerprofilecontainerdivmobile">
                    {profiles &&
                        profiles.map((profile, idx) => (
                        <div key={idx} className="flex flex-col gap-2 min-h-[27rem] max-h-[29rem]">
                            <div className="h-[80%]">
                                <img className="h-[100%] w-[100%] rounded-t-xl"
                                src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} alt={`${profile.fields.name}img`} />
                            </div>
                            <div className="mx-auto flex flex-col pb-2">
                                <p className="text-center text-lg font-serif">{profile.fields.name}</p>
                                <div className="flex flex-col gap-0 text-sm text-center">
                                    <p className="text-nowrap">{profile.fields.experience}</p>
                                    <ParseRichText document={profile.fields.contactInfo}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};