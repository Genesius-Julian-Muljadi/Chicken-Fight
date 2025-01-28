import { getOwnerProfilesContentful, getStaffProfilesContentful } from "@/contentful/functions/contentful.functions"
import { IAsset } from "@/contentful/types/contentful.types";

export default async function AboutUsTeam() {
    const oprofiles = await getOwnerProfilesContentful();
    const sprofiles = await getStaffProfilesContentful();

    return (
        <div>
            <div className="flex flex-col gap-4 mx-auto w-[95vw]">
                <div className="mx-auto font-semibold text-lg">Team</div>
                <div className="grid grid-cols-2 grid-rows-1 gap-3">
                    <div className="col-start-1 row-start-1 m-auto flex flex-row gap-2 h-[20rem]" id="aboutusowners">
                        {oprofiles &&
                            oprofiles.map((profile, idx) => (
                            <div key={idx} className="flex flex-col gap-2 rounded-xl shadow-md shadow-slate-800">
                                <div className="h-[80%]">
                                    <img className="h-[100%] w-[100%] rounded-t-xl"
                                    src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} alt={`${profile.fields.name}img`} />
                                </div>
                                <div className="text-left mx-auto w-[80%] flex flex-col">
                                    <p className="text-center text-lg font-serif">{profile.fields.name}</p>
                                    <p className="text-center text-sm font-semibold text-nowrap">Owner</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-start-2 row-start-1 m-auto flex flex-row gap-2 h-[20rem]" id="aboutusstaff">
                        {sprofiles &&
                            sprofiles.map((profile, idx) => (
                            <div key={idx} className="flex flex-col gap-2 rounded-xl shadow-md shadow-slate-800">
                                <div className="h-[80%]">
                                    <img className="h-[100%] w-[100%] rounded-t-xl"
                                    src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} alt={`${profile.fields.name}img`} />
                                </div>
                                <div className="text-left mx-auto w-[80%] flex flex-col">
                                    <p className="text-center text-lg font-serif">{profile.fields.name}</p>
                                    <p className="text-center text-sm font-semibold text-nowrap">{profile.fields.jobTitleExpertise}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}