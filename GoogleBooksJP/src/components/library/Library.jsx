import React, { useEffect, useState } from "react";
import { getLibrary } from "../../services/library/library";
import BookLibrary from "../bookLibrary/BookLibrary";
import style from "./Library.module.scss";

const Library = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getLibrary().then((books) => setBooks(books));
    }, []);

    return (
        <div>
            <>
                {books && (
                    <section className={style.Library}>
                        {books.map((book) => (
                            <BookLibrary key={book.id} bookData={book} />
                        ))}
                    </section>
                )}
            </>
        </div>
    );
};

export default Library;
