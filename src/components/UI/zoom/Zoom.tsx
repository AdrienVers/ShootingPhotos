import React from "react";
import Image from "next/image";
import styles from "./zoom.module.scss";

interface Props {
	photo: string;
	onClose: () => void;
}

const Zoom = ({ photo, onClose }: Props) => {
	return (
		<div className={styles.container} onClick={onClose}>
			<div className={styles.content}>
				<Image className={styles.photo} src={photo} fill alt="photo" />
			</div>
		</div>
	);
};

export default Zoom;
