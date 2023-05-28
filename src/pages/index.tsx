import Head from "next/head";
import styled from "@emotion/styled";
import Image from "next/image";
import Photoshoot from "../assets/Photoshoot.jpg";

export default function Home() {
	return (
		<HomeGlobal>
			<Head>
				<title>Joseph Paris Visuals</title>
				<meta name="description" content="Joseph Paris Visuals" />
				<link rel="icon" href="/icon.ico" />
			</Head>
			<h1>Application de partage et de retouche photos</h1>
			<div
				className="Description"
				style={{ backgroundColor: "rgb(240, 240, 240)" }}
			>
				<div className="DescriptionText">
					<h3>Étape 1 : Photoshoot avec le modèle.</h3>
					<p>
						{
							"Lors de cette étape, le photographe effectue un photoshoot avec le modèle. En fonction de l'objectif de la séance photo, le modèle peut être habillé de manière élégante ou décontractée. Le but est de créer des photos qui mettent en valeur les qualités du modèle et de faire en sorte que ces photos répondent aux besoins de l'entreprise ou du client. La préparation avant le photoshoot, comme la sélection de l'emplacement, la planification de la tenue du modèle, est importante pour garantir un résultat de qualité."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Photoshoot} alt="PhotoShoot" />
				</div>
			</div>
			<div className="Description">
				<div className="DescriptionText">
					<h3>Étape 2 : Vous recevez les photos du photoshooting</h3>
					<p>
						{
							"Après le photoshoot, vous recevez les photos prises sur l'application. Vous pouvez examiner attentivement les photos et en vue de les sélectionner celles qui répondent à vos attentes et qui méritent d'être améliorées, ou celles que vous considérez déjà belles mais qui nécessitent des modifications."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Photoshoot} alt="Photoshoot" />
				</div>
			</div>
			<div
				className="Description"
				style={{ backgroundColor: "rgb(240, 240, 240)" }}
			>
				<div className="DescriptionText">
					<h3>Étape 3 : Vous sélectionnez les photos à retoucher</h3>
					<p>
						{
							"Une fois les photos reçues, vous pouvez sélectionner les photos à retoucher. Il est important de choisir les photos qui ont le plus de potentiel et de les retoucher pour les améliorer. Cela peut inclure la correction des couleurs, l'ajout d'effets et la suppression d'éléments indésirables."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Photoshoot} alt="Photoshoot" />
				</div>
			</div>
			<div className="Description">
				<div className="DescriptionText">
					<h3>Étape 4 : Vous recevez les photos retouchées</h3>
					<p>
						{
							"Après avoir retouché les photos, le photographe vous les renvoit sur l'application. Il est important de vérifier attentivement les photos retouchées pour vous assurer qu'elles correspondent à vos attentes. Si vous avez des commentaires ou des modifications supplémentaires à apporter, vous pouvez les faire savoir et les retouches seront effectuées en conséquence. Une fois que les photos retouchées sont approuvées, elles peuvent être utilisées pour vos propres besoins ou ceux de votre entreprise."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Photoshoot} alt="Photoshoot" />
				</div>
			</div>
		</HomeGlobal>
	);
}

const HomeGlobal = styled.div`
	background-color: white;
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		margin: 20px 0px;
		text-align: center;
	}

	.Description {
		display: flex;
		flex-direction: row;
		padding: 0px 20px;

		.DescriptionText {
			width: 70%;
			display: flex;
			flex-direction: column;
			padding: 20px;

			@media (max-width: 900px) {
				width: 100%;
			}

			h3 {
				margin: 0px;
			}

			p {
				margin: 10px 0px 0px 0px;
			}
		}

		.DescriptionImage {
			width: 30%;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (max-width: 900px) {
				display: none;
			}

			.Image {
				width: 50%;
				height: auto;
				padding: 10px;
			}
		}
	}
`;
