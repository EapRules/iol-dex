
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { ThemeContext } from "../../Context/ThemeContext";

function Species({ name, url }) {

	const {theme} = useContext(ThemeContext)


	const [types, setTypes] = useState([]);
	const [stats, setStats] = useState([]);
	const [img, setImg] = useState('');

	useEffect(() => {
		console.log(theme)
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
				setTypes(typesList);
			})
			.catch((error) => {
				console.error(error);
			})
	}, [url,theme]);

	return (
		<div>
			<Card className={`shadow-sm border text-center m-4 border-primary bg-${theme.backgroundColor === "black" ? "dark" : "light"}`} rounded style={{backgroundColor:theme.backgroundColor}} >
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
		</div>
	)
}

export default Species;