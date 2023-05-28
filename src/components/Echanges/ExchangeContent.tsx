import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Photo from "../../assets/Photo.png";
import Link from "next/link";

function ExchangeContent() {
	return (
		<ExchangeContentGlobal>
			<h1>Mes échanges</h1>
			<div className="ExchangeList">
				<Link href="/shooting">
					<div className="ExchangeFolder">
						<div>
							<Image className="Photo" src={Photo} alt="Photo" />
						</div>
						<div className="ExchangeDescription">
							<i className="fa-solid fa-camera" />
							<span>Photos du shooting</span>
						</div>
					</div>
				</Link>
				<Link href="/retouches">
					<div className="ExchangeFolder">
						<div>
							<Image className="Photo" src={Photo} alt="Photo" />
						</div>
						<div className="ExchangeDescription">
							<i className="fa-solid fa-wand-magic-sparkles" />
							<span>Photos retouchées</span>
						</div>
					</div>
				</Link>
			</div>
		</ExchangeContentGlobal>
	);
}

export default ExchangeContent;

const ExchangeContentGlobal = styled.div`
	background-color: rgb(224, 221, 215);
	padding-bottom: 15px;

	h1 {
		font-size: 1.7rem;
		padding: 20px 0px 5px 30px;
		margin: 0px;
		color: black;
	}

	.ExchangeList {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 40px;
		gap: 20px;

		.ExchangeFolder {
			display: flex;
			background-color: rgb(255, 255, 255);
			padding: 10px 25px;
			border-radius: 10px;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.Photo {
				max-width: 180px;
				max-height: 180px;
			}

			.ExchangeDescription {
				display: flex;
				align-items: center;
				justify-content: center;

				i {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 8px;
					color: black;
				}

				span {
					display: flex;
					align-items: center;
					padding: 8px;
					color: black;
				}
			}
		}
	}
`;
