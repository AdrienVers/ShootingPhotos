import Link from "next/link";
import React from "react";
import styles from "./navigation.module.scss";

interface LinkProps {
	href: string;
	text: string;
}

interface Props {
	links: LinkProps[];
}
function Navigation({ links }: Props) {
	return (
		<div className={styles.container}>
			{links.map((link, index) => (
				<p key={index}>
					<Link href={link.href}>
						<span>{link.text}</span>
					</Link>
					{index < links.length - 1 && <span className={styles.arrow}>›</span>}
				</p>
			))}
		</div>
	);
}

export default Navigation;
