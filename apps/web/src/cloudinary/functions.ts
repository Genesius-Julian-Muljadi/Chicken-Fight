import axios from "axios";

export async function deleteCloudinaryImage(publicID: string) {
  try {
    const API: string =
      process.env.NEXT_PUBLIC_BASE_API_URL + "/cloudinary/destroy";
    const output = await axios.delete(API, {
      data: {
        publicID: publicID,
        resource_type: "image",
      },
    });

    if (!output) throw Error();
  } catch (err) {
    // nothing
  }
}

export function setCloudinaryLocalStorage(image: string) {
  if (typeof localStorage.CloudinaryPendingUploads === "string") {
    localStorage.CloudinaryPendingUploads += image + "||";
  } else {
    localStorage.CloudinaryPendingUploads = image + "||";
  }
}

export function clearCloudinaryLocalStorage(image: string, destroy: boolean) {
  if (typeof localStorage.CloudinaryPendingUploads === "string") {
    let newString: string = "";
    localStorage.CloudinaryPendingUploads.split("||")
      .filter((publicID: string) => {
        return publicID && publicID !== image;
      })
      .forEach((publicID: string) => {
        newString += publicID + "||";
      });
    localStorage.CloudinaryPendingUploads = newString;

    if (destroy) {
      deleteCloudinaryImage(image);
    }
  }
}
