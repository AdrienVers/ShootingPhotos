import React from "react";
import styled from "@emotion/styled";

function ExchangeDescription() {
	return (
		<ExchangeDescriptionGlobal>
			<h2>{"Mode d'emplois"}</h2>
			<p>
				{
					"Dans le dossier « Photos du shooting », vous trouverez toutes les photos du shooting. Vous pouvez sélectionner les photos que vous souhaitez retoucher en cliquant dessus, une case cochée apparaîtra sur le haut de la photo. Dans l'encadré qui apparaîtra sous la photo, communiquez clairement toutes les demandes de modifications supplémentaires. Une fois que vous avez sélectionné toutes les photos que vous souhaitez retoucher, cliquez sur le bouton « Retoucher les photos sélectionnées » sur le côté droit de la page."
				}
			</p>
			<p>{}</p>
			<p>
				{
					"Ensuite, dans le dossier « Photos retouchées », vous trouverez les photos retouchées par le photographe. Vous pouvez alors les télécharger et les utiliser comme bon vous semble."
				}
			</p>
		</ExchangeDescriptionGlobal>
	);
}

export default ExchangeDescription;

const ExchangeDescriptionGlobal = styled.div`
	background-color: white;
	padding: 20px 40px;

	p {
		font-size: 1.1rem;
	}
`;
