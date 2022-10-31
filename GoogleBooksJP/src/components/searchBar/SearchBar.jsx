import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./SearchBar.module.scss";
import ErrorContext from "../../components/errorContext/ErrorContext";

const SearchBar = ({ searchParams, setSearchParams }) => {
    const [error, setError] = useContext(ErrorContext);
    const navigate = useNavigate();

    const onSubmitSearch = (event) => {
        event.preventDefault();
        const search = event.target.search.value.split(" ").join("+");
        setSearchParams({ search: search, startIndex: 0 });
        event.target.search.value = "";
        navigate(`/${search}`);
        setError("");
    };

    return (
        <form className={style.Form} onSubmit={onSubmitSearch}>
            <div>
                <input className={style.Bar} id="search" type="text" name="search" placeholder="Type a Title or a an Author" autoComplete="off" />
            </div>
            <div>
                <input className={style.Btn} id="submit" type="submit" value="Search" />
            </div>
        </form>
    );
};

export default SearchBar;
