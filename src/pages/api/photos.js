import { getShootingPhotos } from "../../lib/googleDrive";

export default async function handler(req, res) {
	const photos = await getShootingPhotos();

	res.status(200).json(photos);
}
