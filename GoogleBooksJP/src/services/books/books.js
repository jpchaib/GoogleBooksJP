const getBooksJSON = async (searchParams) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParams.search}&startIndex=${searchParams.startIndex}`);
    const json = await response.json();
    console.log(json);

    if (json.items.length == 0) {
        throw new Error("Your search had 0 matches");
    }

    return json;
};

export default getBooksJSON;
