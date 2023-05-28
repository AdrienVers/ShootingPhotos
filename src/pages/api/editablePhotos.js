import { getEditablePhotos } from "../../lib/googleDrive";

export default async function handler(req, res) {
	const photos = await getEditablePhotos();

	res.status(200).json(photos);
}
