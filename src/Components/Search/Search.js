import React, { useContext, useState } from 'react'
import { PokeContext } from '../../Context/PokeContext';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';

export const Search = () => {

    const { t } = useTranslation();
    const [ query, setQuery ] = useState('');
    const { setActive, setQueryTerm } = useContext(PokeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        query ? setActive(false) : setActive(true);
        setQueryTerm(query);
        setQuery("")
    }

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <Container className="flex">
        <Form onSubmit={handleSubmit} className="d-flex flex column">
            <FormControl type="text" placeholder={t('Search')} className="mr-sm-2" onChange={handleChange} value={query} />
            <Button type="submit">{t("SearchBtn")}</Button>
        </Form>
        </Container>
    )
}
