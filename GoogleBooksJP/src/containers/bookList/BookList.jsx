import React from "react";
import { useState, useEffect } from "react";
import BookCard from "../../components/bookCard/BookCard";
import getBooksJSON from "../../services/books/books";
import style from "./BookList.module.scss";
import { useContext } from "react";
import BookContext from "../../components/bookContext/BookContext";
import ErrorContext from "../../components/errorContext/ErrorContext";

const BookList = ({ searchParams, setSearchParams }) => {
    const [books, setBooks] = useContext(BookContext);
    const [error, setError] = useContext(ErrorContext);
    const [json, setJson] = useState({});

    useEffect(() => {
        getBooksJSON(searchParams)
            .then((data) => {
                setBooks(data.items);
                setJson(data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [searchParams]);

    console.log(json);

    const movePageUp = (event) => {
        if (searchParams.startIndex < json.totalItems / 10) {
            setSearchParams({ ...searchParams, startIndex: searchParams.startIndex + 1 });
        }
    };

    const movePageDown = (event) => {
        if (searchParams.startIndex > 0) {
            setSearchParams({ ...searchParams, startIndex: searchParams.startIndex - 1 });
        }
    };

    return (
        <>
            {(error && (
                <div className={style.Error}>
                    <h1>Your search had 0 matches.</h1>
                    <p>Please try providing more information for your search.</p>
                </div>
            )) ||
                (books && (
                    <section className={style.BookList}>
                        <div className={style.BtnContainer}>
                            <button className={style.Btn} onClick={movePageDown}>
                                &#9194;
                            </button>
                            <div className={style.Page}>Page {searchParams.startIndex}</div>
                            <button className={style.Btn} onClick={movePageUp}>
                                &#9193;
                            </button>
                        </div>
                        <div className={style.Grid}>
                            {books.map((book) => (
                                <BookCard key={book.id} bookData={book} />
                            ))}
                        </div>
                    </section>
                ))}
        </>
    );
};

export default BookList;
