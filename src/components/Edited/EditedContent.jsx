import React, { useState, useEffect } from "react";
// import Image from "next/image";
import styles from "./edited.module.scss";
import Zoom from "../UI/zoom/Zoom";

function EditedContent() {
	const [photos, setPhotos] = useState([]);
	const [zoomPhoto, setZoomPhoto] = useState(null);

	const handleZoomPhoto = (url) => {
		setZoomPhoto(url);
	};

	useEffect(() => {
		async function fetchPhotos() {
			const res = await fetch("/api/editablePhotos");
			const photosData = await res.json();
			setPhotos(photosData);
		}

		fetchPhotos();
	}, []);
	return (
		<div className={styles.container}>
			<h1>Photos retouchées</h1>
			<form>
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
								<img
									className={styles.photo}
									key={item.id}
									src={item.url}
									alt="Photo"
									width={400}
									height={400}
								/>
							</div>
						))}
					</div>
				) : (
					<div>Chargement...</div>
				)}
			</form>
			{zoomPhoto && (
				<Zoom photo={zoomPhoto} onClose={() => setZoomPhoto(null)} />
			)}
		</div>
	);
}

export default EditedContent;
