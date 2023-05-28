import { copyToEditablePhotos } from "../../lib/googleDrive";

export default async function handler(req, res) {
	const { fileId, targetFolderId } = req.body;

	try {
		const result = await copyToEditablePhotos(fileId, targetFolderId);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
}
