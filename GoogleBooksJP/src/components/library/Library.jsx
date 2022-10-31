import React from "react";

const Library = () => {
    return (
        <div>
            <>
                {error && <h1>{error}</h1>}
                {books && (
                    <section>
                        {books.map((book) => (
                            <BookCard key={book.id} bookData={book} />
                        ))}
                    </section>
                )}
            </>
        </div>
    );
};

export default Library;
