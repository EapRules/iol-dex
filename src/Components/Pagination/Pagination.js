import React,{useContext}from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ThemeContext } from "../../Context/ThemeContext";

function Pagination({ prevPage, nextPage, pageNum }) {
const {theme} = useContext(ThemeContext)

    return (
        <ButtonGroup>
            <Button variant={theme.backgroundColor === "black" ? "dark" : "primary"} onClick={prevPage} disabled={!prevPage}>Previous</Button>
            <Button variant={theme.backgroundColor === "black" ? "dark" : "primary"} disabled>{pageNum}</Button>
            <Button variant={theme.backgroundColor === "black" ? "dark" : "primary"} onClick={nextPage} disabled={!nextPage}>Next</Button>
        </ButtonGroup>
    );
}

export default Pagination;