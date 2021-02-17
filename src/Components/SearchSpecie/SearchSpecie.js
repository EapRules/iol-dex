import React,{ useContext } from 'react'
import  Species  from "../Species/Species";
import {PokeContext} from '../../Context/PokeContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const SearchSpecie = () => {
  
  const {queryTerm, setActive} = useContext(PokeContext);
	const name = queryTerm.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const back = () =>{
    setActive(true);
  }

  return (
    <Container className="my-4">
    <Button onClick={back}>back</Button>
    <Species name={name} url={url} />
    </Container>
  )
}
