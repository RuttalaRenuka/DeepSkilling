import React from "react";


function BookDetails(){

    const books = [
        {
            id:1,
            name:"Java Programming",
            author:"James Gosling"
        },
        {
            id:2,
            name:"React Basics",
            author:"Facebook"
        }
    ];


    return(

        <div>

            <h2>Book Details</h2>

            <ul>

            {
                books.map((book)=>(
                    <li key={book.id}>
                        {book.name} - {book.author}
                    </li>
                ))
            }

            </ul>


        </div>

    );

}


export default BookDetails;