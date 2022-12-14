import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addBook } from "../../services/library/library";
import style from "./BookCard.module.scss";

const BookCard = ({ bookData }) => {
    const navigate = useNavigate();
    const rate = [];
    const [info, setInfo] = useState({
        id: "",
        title: "",
        authors: [],
        imageLinks: {
            thumbnail: "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg",
        },
        averageRating: "-",
    });

    const id = bookData.id;
    const item = bookData.volumeInfo;

    Object.keys(info).forEach((key) => {
        if (item[key]) {
            info[key] = item[key];
        }
    });

    Object.keys(info).forEach((key) => {
        if (bookData[key]) {
            info[key] = bookData[key];
        }
    });

    for (let i = 0; i < info.averageRating; i++) {
        rate.push("&#11088");
    }

    const handleClick = (event) => {
        console.log(info);
        console.log("clicked");
        addBook(info).then(() => navigate("/library/"));
        console.log("Book added");
    };

    return (
        <div className={style.Card}>
            <img className={style.Image} src={info.imageLinks.thumbnail} alt={info.title} width="200px" />
            <div className={style.Collection}>
                <div className={style.Info}>
                    <h3>{info.title}</h3>
                    <h4>Authors: {info.authors.join(", ")}</h4>
                    <div className={style.Rating}>
                        {rate.map((item) => {
                            return <p>&#11088;</p>;
                        })}
                    </div>
                </div>
                <button className={style.Link} onClick={handleClick}>
                    Add to Library
                </button>
                <NavLink className={style.Link} to={`/book/${id}`}>
                    See More
                </NavLink>
            </div>
        </div>
    );
};

export default BookCard;
