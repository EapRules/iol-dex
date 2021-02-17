import React, { useContext } from 'react';
import { NavBar } from "../../Components/NavBar/NavBar";
import { Search } from "../../Components/Search/Search";
import Container from 'react-bootstrap/Container';
import SpeciesList from "../../Components/SpeciesList/SpeciesList";
import { PokeContext } from "../../Context/PokeContext";
import { ThemeContext } from "../../Context/ThemeContext";
import { SearchSpecie } from '../../Components/SearchSpecie/SearchSpecie';

const Home = () => {
	const { theme } = useContext(ThemeContext)
	const { active } = useContext(PokeContext);
 
	return (
		<Container fluid="s" style={theme}>
			<NavBar/>
			<Search/>
			{active ? <SpeciesList /> : <SearchSpecie />}
		</Container>
	);
};

export default Home;