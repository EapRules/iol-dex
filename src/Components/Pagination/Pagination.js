import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

function Pagination({ prevPage, nextPage, pageNum }) {

    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext)

    return (
        <ButtonGroup>
            <Button variant={theme.backgroundColor === "black" ? "dark" : "primary"} onClick={prevPage} disabled={!prevPage}>{t("PrevPage")}</Button>
            <Button variant={theme.backgroundColor === "black" ? "dark" : "primary"} disabled>{pageNum}</Button>
            <Button variant={theme.backgroundColor === "black" ? "dark" : "primary"} onClick={nextPage} disabled={!nextPage}>{t("NextPage")}</Button>
        </ButtonGroup>
    );
}

export default Pagination;