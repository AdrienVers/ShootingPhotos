import { google } from "googleapis";
import { auth } from "./googleAuth";
import fs from "fs";

const SCOPES = process.env.NEXT_PUBLIC_SCOPES;
const GOOGLE_API_SHOOTING_PHOTOS_ID = process.env.GOOGLE_API_SHOOTING_PHOTOS_ID;
const GOOGLE_API_EDITABLE_PHOTOS_ID = process.env.GOOGLE_API_EDITABLE_PHOTOS_ID;
const GOOGLE_API_EDITED_PHOTOS_ID = process.env.GOOGLE_API_EDITED_PHOTOS_ID;

const drive = google.drive({
	version: "v3",
	auth,
});

export async function getShootingPhotos() {
	const photos = [];

	try {
		const res = await drive.files.list({
			q: `'${GOOGLE_API_SHOOTING_PHOTOS_ID}' in parents`,
			fields: "nextPageToken, files(id, name, webContentLink)",
		});

		const files = res.data.files;
		if (files.length) {
			files.forEach((file) => {
				if (
					file.name.endsWith(".jpg") ||
					file.name.endsWith(".jpeg") ||
					file.name.endsWith(".png")
				) {
					photos.push({ id: file.id, url: file.webContentLink });
				}
			});
		}
	} catch (error) {
		console.log("Error retrieving photos from Google Drive", error);
	}

	return photos;
}

export async function getEditablePhotos() {
	const photos = [];

	try {
		const res = await drive.files.list({
			q: `'${GOOGLE_API_EDITABLE_PHOTOS_ID}' in parents`,
			fields: "nextPageToken, files(id, name, webContentLink)",
		});

		const files = res.data.files;
		if (files.length) {
			files.forEach((file) => {
				if (
					file.name.endsWith(".jpg") ||
					file.name.endsWith(".jpeg") ||
					file.name.endsWith(".png")
				) {
					photos.push({ id: file.id, url: file.webContentLink });
				}
			});
		}
	} catch (error) {
		console.log("Error retrieving photos from Google Drive", error);
	}

	return photos;
}

export async function getEditedPhotos() {
	const photos = [];

	try {
		const res = await drive.files.list({
			q: `'${GOOGLE_API_EDITED_PHOTOS_ID}' in parents`,
			fields: "nextPageToken, files(id, name, webContentLink)",
		});

		const files = res.data.files;
		if (files.length) {
			files.forEach((file) => {
				if (
					file.name.endsWith(".jpg") ||
					file.name.endsWith(".jpeg") ||
					file.name.endsWith(".png")
				) {
					photos.push({ id: file.id, url: file.webContentLink });
				}
			});
		}
	} catch (error) {
		console.log("Error retrieving photos from Google Drive", error);
	}

	return photos;
}

const authorize = () => {
	const keyFile = JSON.parse(fs.readFileSync(KEY_FILE_PATH, "utf8"));
	const jwtClient = new google.auth.JWT(
		keyFile.client_email,
		null,
		keyFile.private_key,
		SCOPES,
	);

	return jwtClient;
};

export const copyToEditablePhotos = async (fileId, targetFolderId) => {
	const jwtClient = authorize();
	const drive = google.drive({ version: "v3", auth: jwtClient });

	const copiedFileMetadata = {
		parents: [targetFolderId],
	};

	const response = await drive.files.copy({
		fileId,
		requestBody: copiedFileMetadata,
	});

	return response.data;
};
