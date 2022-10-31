import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import BookContext from "../bookContext/BookContext";
import { useState } from "react";
import style from "./BookPage.module.scss";

const BookPage = () => {
    const { id } = useParams();
    const [books] = useContext(BookContext);
    const rate = [];

    console.log(books);
    const book = books.find((item) => item.id == id);
    const item = book.volumeInfo;
    console.log(item);

    const [info, setInfo] = useState({
        id: "",
        title: "",
        authors: "",
        imageLinks: {
            thumbnail: "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg",
        },
        averageRating: "-",
        categories: "",
        description: "",
    });

    Object.keys(info).forEach((key) => {
        if (item[key]) {
            info[key] = item[key];
        }
    });

    for (let i = 0; i < info.averageRating; i++) {
        rate.push("&#11088");
    }
    return (
        <div className={style.Page}>
            <img className={style.Image} src={info.imageLinks.thumbnail} alt={info.title} width="200px" />
            <div className={style.Info}>
                <h3>{info.title}</h3>
                <h4>Authors: {info.authors.join(", ")}</h4>
                <h4>Categories: {info.categories.join(", ")}</h4>
                <div className={style.Rating}>
                    {rate.map((item) => {
                        return <p>&#11088;</p>;
                    })}
                </div>
                <p className={style.Description}>{info.description}</p>
            </div>
        </div>
    );
};

export default BookPage;
