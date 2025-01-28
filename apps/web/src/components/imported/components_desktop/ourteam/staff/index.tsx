import { IAsset } from "@/contentful/types/contentful.types";
import { getStaffProfilesContentful } from "@/contentful/functions/contentful.functions";
import { ParseRichText } from "@/contentful/functions/contentful.functions";
import "./style.css";

export default async function Staff() {
    const profiles = await getStaffProfilesContentful();

    return (
        <div>
            
            <div className="flex flex-col gap-4 my-6">
                <div className="flex">
                    <span className="m-auto text-xl font-semibold">Staff</span>
                </div>
                <div className="mx-auto grid grid-cols-3 h-[34.5rem] w-[87vw] gap-6" id="staffprofilecontainerdiv">
                {profiles &&
                    profiles.map((profile, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                        <div className="h-[80%]">
                            <img className="h-[100%] w-[100%] rounded-t-xl"
                            src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} alt={`${profile.fields.name}img`} />
                        </div>
                        <div className="text-left mx-auto w-[80%] flex flex-col">
                            <p className="text-center text-lg font-serif">{profile.fields.name}</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <p className="font-semibold">{profile.fields.jobTitleExpertise}</p>
                                <p className="">{profile.fields.jobExperience}</p>
                            </div>
                            <div className="text-sm">
                                <ParseRichText document={profile.fields.contactInfo}/>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}