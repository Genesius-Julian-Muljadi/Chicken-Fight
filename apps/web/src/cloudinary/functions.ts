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
