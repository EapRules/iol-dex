import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Species from '../Species/Species';
import Pagination from "../Pagination/Pagination";
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";

function SpeciesList() {

    const { t } = useTranslation();
    const [currPage, setCurrPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [pokemonList, setPokemonList] = useState([]);
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        axios.get(currPage)
            .then((res) => {
                setPokemonList(res.data.results);
                setPrevPage(res.data.previous);
                setNextPage(res.data.next);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [currPage, pageNum]);

    function NextPage() {
        setCurrPage(nextPage);
        setPageNum(page => ++page);
    }

    function PrevPage() {
        setCurrPage(prevPage);
        setPageNum(page => --page);
    }

    return (
        <Container>
            <h1 className="my-5" >{t('Title')}</h1>
            <CardDeck className="justify-content-md-center">
                {pokemonList.map((pokemon, i) =>
                    <Species key={i} name={pokemon.name} url={pokemon.url} />
                )}
            </CardDeck>
            <Row className="justify-content-md-center py-5">
                <Col class="col-md-12 text-center">
                    <Pagination
                        prevPage={prevPage ? PrevPage : null}
                        nextPage={nextPage ? NextPage : null}
                        pageNum={pageNum} />
                </Col>
            </Row>
        </Container>
    );
}

export default SpeciesList;