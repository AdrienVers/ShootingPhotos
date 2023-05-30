import Head from "next/head";
import styled from "@emotion/styled";
import Image from "next/image";
import Illustration1 from "../assets/Illustration1.jpeg";
import Illustration2 from "../assets/Illustration2.jpeg";
import Illustration3 from "../assets/Illustration3.jpeg";
import Illustration4 from "../assets/Illustration4.jpeg";

export default function Home() {
	return (
		<HomeGlobal>
			<Head>
				<title>Joseph Paris Visuals</title>
				<meta name="description" content="Joseph Paris Visuals" />
				<link rel="icon" href="/icon.ico" />
			</Head>
			<h1>Application de partage et retouche photos</h1>
			<div
				className="Description"
				style={{ backgroundColor: "rgb(240, 240, 240)" }}
			>
				<div className="DescriptionText">
					<h3>Étape 1 : Photoshoot</h3>
					<p>
						{
							"Au cours de cette première étape, le photographe réalise une séance photo avec le modèle. Selon le but de cette séance, le modèle pourrait être vêtu de manière formelle ou décontractée. Le principal objectif est de créer des clichés qui mettent en avant les atouts du modèle et qui correspondent aux besoins du client ou de l'entreprise. La préparation préalable à cette séance, comme le choix du lieu, la planification des tenues du modèle, est essentielle pour assurer des résultats de haute qualité."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Illustration1} alt="PhotoShoot" />
				</div>
			</div>
			<div className="Description">
				<div className="DescriptionText">
					<h3>Étape 2 : Sélection des photos</h3>
					<p>
						{
							"Suite au photoshoot, vous avez l'occasion d'examiner minutieusement les clichés obtenus. Le but est de repérer les photos qui correspondent le mieux à vos attentes et qui nécessitent des retouches, ou encore les photos déjà remarquables mais requérant quelques modifications."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Illustration2} alt="Photoshoot" />
				</div>
			</div>
			<div
				className="Description"
				style={{ backgroundColor: "rgb(240, 240, 240)" }}
			>
				<div className="DescriptionText">
					<h3>Étape 3 : Retouche des photos</h3>
					<p>
						{
							"Après avoir sélectionné les photos à retoucher, l'étape de post-production commence. Cette étape peut impliquer la correction des couleurs, l'ajout d'effets spéciaux et la suppression de tout élément indésirable. Le but est de sublimer les photos sélectionnées pour les améliorer et répondre à vos attentes."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Illustration3} alt="Photoshoot" />
				</div>
			</div>
			<div className="Description">
				<div className="DescriptionText">
					<h3>Étape 4 : Le modèle reçoit les photos retouchées</h3>
					<p>
						{
							"Une fois les retouches terminées, le photographe envoie les photos retouchées au modèle. Le modèle doit alors les examiner attentivement pour vérifier qu'elles correspondent bien à ses attentes. Si des commentaires ou des modifications supplémentaires doivent être faits, le modèle peut les indiquer et les ajustements seront réalisés en conséquence. Une fois que les photos retouchées sont validées, elles sont prêtes à être utilisées pour les besoins du modèle ou de l'entreprise."
						}
					</p>
				</div>
				<div className="DescriptionImage">
					<Image className="Image" src={Illustration4} alt="Photoshoot" />
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
