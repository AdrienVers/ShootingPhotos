import { getEditedPhotos } from "../../lib/googleDrive";

export default async function handler(req, res) {
	const photos = await getEditedPhotos();

	res.status(200).json(photos);
}
