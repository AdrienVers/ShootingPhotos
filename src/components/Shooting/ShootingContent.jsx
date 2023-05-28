import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./shooting.module.scss";
import Zoom from "../UI/zoom/Zoom";

function ShootingContent() {
	const [selectedPhotos, setSelectedPhotos] = useState([]);
	const [photos, setPhotos] = useState([]);
	const [zoomPhoto, setZoomPhoto] = useState(null);

	const handleCheckBoxChange = (photo, isChecked) => {
		if (isChecked) {
			setSelectedPhotos((prev) => [...prev, photo]);
		} else {
			setSelectedPhotos((prev) => prev.filter((p) => p.id !== photo.id));
		}
	};

	const handleZoomPhoto = (url) => {
		setZoomPhoto(url);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!selectedPhotos.length) return;

		const promises = selectedPhotos.map(async (photo) => {
			console.log(photo);

			const response = await fetch("/api/upload", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fileId: photo.id,
					targetFolderId: process.env.GOOGLE_API_EDITABLE_PHOTOS_ID,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				console.log(result);
				alert(`Image copied successfully. File ID: ${result.id}`);
			} else {
				const error = await response.json();
				alert(`Error copying image: ${error.error}`);
			}
		});

		await Promise.all(promises);
	};

	useEffect(() => {
		async function fetchPhotos() {
			const res = await fetch("/api/photos");
			const photosData = await res.json();
			setPhotos(photosData);
		}

		fetchPhotos();
	}, []);
	return (
		<div className={styles.container}>
			<h1>Photos du shooting</h1>
			<form onSubmit={handleSubmit}>
				{photos.length ? (
					<div className={styles.shootingList}>
						{photos.map((item) => (
							<div
								key={item.id}
								className={styles.shootingPhoto}
								onClick={() => {
									handleZoomPhoto(item.url);
								}}
							>
								<Image
									className={styles.photo}
									key={item.id}
									src={item.url}
									alt="Photo"
									width={400}
									height={400}
								/>
								<div
									className={styles.photoFilter}
									style={{
										opacity: selectedPhotos.some(
											(photo) => photo.id === item.id,
										)
											? 1
											: 0,
									}}
								/>
								<input
									type="checkbox"
									onChange={(e) => {
										handleCheckBoxChange(item, e.target.checked);
										handleZoomPhoto(null);
									}}
								/>
							</div>
						))}
					</div>
				) : (
					<div>Chargement...</div>
				)}
				<div className={styles.buttonContainer}>
					{selectedPhotos.length === 0 ? (
						<button
							type="submit"
							disabled
							style={{
								cursor: "not-allowed",
							}}
						>
							Sélectionnez des photos à retoucher
						</button>
					) : (
						<button
							type="submit"
							style={{
								cursor: "pointer",
							}}
						>
							{selectedPhotos.length === 1
								? `Envoyer la photo sélectionnée à retoucher`
								: `Envoyer les ${selectedPhotos.length} photos sélectionnées à retoucher`}
						</button>
					)}
				</div>
			</form>
			{zoomPhoto && (
				<Zoom photo={zoomPhoto} onClose={() => setZoomPhoto(null)} />
			)}
		</div>
	);
}

export default ShootingContent;
