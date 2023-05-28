import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import Link from "next/link";
import { NAVBAR_DATA } from "./navbarData";
import styles from "./navbar.module.scss";

type AnimationProps = {
	isActive: boolean;
};

function Navbar() {
	const [active, setActive] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<Link href="/">
					<Image className={styles.logo} src={Logo} alt="logo" />
				</Link>
			</div>
			<div className={styles.linksContainer}>
				{NAVBAR_DATA.map((item, index) => (
					<Link key={index} href={item.path} legacyBehavior>
						<a target={item.target} className={styles.textLink}>
							{item.name}
						</a>
					</Link>
				))}
			</div>
			<div className={styles.buttonContainer}>
				<Link href="/echanges">
					{active ? (
						<button onClick={() => setActive(!active)}>
							{"Espace client"}
						</button>
					) : (
						<button>{"Espace client"}</button>
					)}
				</Link>
			</div>
			<div className={styles.hamburgerContainer}>
				{active ? (
					<i
						role="sidebarButton"
						className="fa-solid fa-xmark"
						onClick={() => setActive(!active)}
						style={{ marginLeft: "6px" }}
					/>
				) : (
					<i className="fa-solid fa-bars" onClick={() => setActive(!active)} />
				)}
			</div>
			<SidebarContent isActive={active}>
				<div className="SidebarLinks">
					{NAVBAR_DATA.map((item, index) => (
						<Link key={index} href={item.path} legacyBehavior>
							<a target={item.target} onClick={() => setActive(!active)}>
								{item.name}
							</a>
						</Link>
					))}
				</div>
			</SidebarContent>
			<SidebarBackground isActive={active} />
		</div>
	);
}

export default Navbar;

const SidebarContent = styled.div<AnimationProps>`
	display: none;
	z-index: 2;

	@media (max-width: 900px) {
		display: flex;
		position: absolute;
		color: rgb(10, 10, 10);
		top: 80px;
		height: 100vh;
		width: 100%;
		left: 0;
		transition: all 1.4s;
		background-color: transparent;
		transform: ${({ isActive }) =>
			isActive ? "translateX(0)" : "translateX(-100%)"};
	}

	.SidebarLinks {
		display: flex;
		flex-direction: column;
		gap: 20px;
		background-color: white;
		padding: 30px 30px 40px 20px;
		width: 225px;
		height: 100%;

		@media (max-width: 900px) {
			display: flex;
		}
	}
`;

const SidebarBackground = styled.div<AnimationProps>`
	position: absolute;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		transition: background-color 1.2s ease-in-out;
		background-color: ${({ isActive }) =>
			isActive ? "rgba(0, 0, 0, 0.5)" : "transparent"};
		transform: ${({ isActive }) =>
			isActive ? "translateX(0)" : "translateX(-100%)"};
		top: 80px;
		left: 0px;
		z-index: 1;
	}
`;
