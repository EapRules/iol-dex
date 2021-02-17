
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../Context/ThemeContext";
import { PokeContext } from "../../Context/PokeContext";
import Calmarno from "../../Assets/Images/vamoacalmarno.png"

function Species({ name, url }) {

	const { theme } = useContext(ThemeContext)
	const { setActive } = useContext(PokeContext);
	const { t } = useTranslation();
	const [error, setError] = useState(false)
	const [types, setTypes] = useState([]);
	const [stats, setStats] = useState([]);
	const [img, setImg] = useState('');

	useEffect(() => {
		let typesList = [];
		axios.get(url)
			.then((res) => {
				setImg(res.data.sprites.front_default);
				setStats(res.data.stats);
				const TypesArray = res.data.types;
				TypesArray.map((type) => {
					typesList.push(type.type.name);
					return type;
				});
				setError(false)
				setTypes(typesList);
			})
			.catch((error) => {
				console.error(error);
				setError(true)
			})
	}, [url, theme]);

	return (
		<div>
			{error ?
				<Jumbotron className={
					`my-5 text-${theme.color === "black" ? "dark" : "white"} 
				bg-${theme.backgroundColor === "black" ? "dark" : "light"}`}>
					<h1>{t("ErrorTitle")}</h1>
					<img src={Calmarno} alt="logo" className="logo"></img> 
					<p>
						{t("ErrorMsg")}
					</p>
					<p>
						<Button onClick={() => setActive(true)}>back</Button>
					</p>
				</Jumbotron>
				:
				<Card className={`shadow-sm border text-center m-4 border-primary bg-${theme.backgroundColor === "black" ? "dark" : "light"}`} >
					<Card.Header className={`border-0 bg-${theme.backgroundColor}`}>
						<Card.Img className="bg-light" variant="top" src={img} alt={name} style={{ width: "12rem", margin: "auto", borderRadius: '50%' }} />
					</Card.Header>
					<Card.Body>
						<Card.Subtitle className="fw-bold mb-4 text-primary rounded">{name.toUpperCase()}</Card.Subtitle>
						{types.map((typeName, i) => (
							<span key={i} className={`border bg-${theme.backgroundColor} p-2 border-warning rounded`}> {typeName}</span>
						))}
						<div className={`border bg-${theme.backgroundColor} mt-2 border-warning rounded`}>
							{stats.map((stat, i) => (
								<Card.Text key={i} className="m-2">{stat.stat.name}: {stat.base_stat}</Card.Text>
							))}
						</div>
					</Card.Body>
				</Card>
			}

		</div>
	)
}

export default Species;