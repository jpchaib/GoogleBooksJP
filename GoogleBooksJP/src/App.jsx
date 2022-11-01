import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import style from "./App.module.scss";
import SearchBar from "./components/searchBar/SearchBar";
import BookList from "./containers/bookList/BookList";
import BookPage from "./components/bookPage/BookPage";
import BookContext from "./components/bookContext/BookContext";
import ErrorContext from "./components/errorContext/ErrorContext";
import Nav from "./components/nav/Nav";
import Library from "./components/library/Library";

function App() {
    const [searchParams, setSearchParams] = useState({});
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    return (
        <div className={style.App}>
            <BrowserRouter>
                <Nav />
                <h1 className={style.Title}>Google Books Search</h1>
                <BookContext.Provider value={[books, setBooks]}>
                    <ErrorContext.Provider value={[error, setError]}>
                        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
                        <Routes>
                            <Route path="/" element={<></>} />
                            <Route path="/:search/" element={<BookList searchParams={searchParams} setSearchParams={setSearchParams} />} />
                            <Route path="/book/:id/" element={<BookPage />} />
                            <Route path="/library/" element={<Library />} />
                        </Routes>
                    </ErrorContext.Provider>
                </BookContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
