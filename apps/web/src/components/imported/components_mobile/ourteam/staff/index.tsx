import { IAsset } from "@/contentful/types/contentful.types";
import { getStaffProfilesContentful } from "@/contentful/functions/contentful.functions";
import { ParseRichText } from "@/contentful/functions/contentful.functions";
import "./style.css";

export default async function StaffMobile() {
    const profiles = await getStaffProfilesContentful();

    return (
        <div>
            
            <div className="flex flex-col gap-4 mt-6">
                <div className="flex">
                    <span className="m-auto text-xl font-semibold">Staff</span>
                </div>
                <div className="mx-auto grid grid-cols-3 min-h-[16rem] max-h-[20rem] max-w-[93vw] gap-1" id="staffprofilecontainerdivmobile">
                {profiles &&
                    profiles.map((profile, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                        <div className="h-[80%]">
                            <img className="h-[100%] w-[100%] rounded-t-xl"
                            src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} alt={`${profile.fields.name}img`} />
                        </div>
                        <div className="text-left mx-auto flex flex-col place-content-center pb-2">
                            <p className="text-center text-lg font-serif">{profile.fields.name}</p>
                            <div className="flex flex-col gap-0 text-sm">
                                <p className="font-semibold text-nowrap text-center">{profile.fields.jobTitleExpertise}</p>
                                <p className="text-nowrap text-center">{profile.fields.jobExperience}</p>
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