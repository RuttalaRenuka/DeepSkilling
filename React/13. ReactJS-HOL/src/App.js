import React, {useState} from "react";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";


function App(){


    const [show,setShow] = useState("book");


    const renderComponent = () => {

        if(show==="book"){

            return <BookDetails/>;

        }

        else if(show==="blog"){

            return <BlogDetails/>;

        }

        else{

            return <CourseDetails/>;

        }

    };



    return(

        <div>


            <h1>
                Blogger App
            </h1>


            <button onClick={()=>setShow("book")}>
                Books
            </button>


            <button onClick={()=>setShow("blog")}>
                Blogs
            </button>


            <button onClick={()=>setShow("course")}>
                Courses
            </button>



            <hr/>


            {
                renderComponent()
            }



            <hr/>


            <h2>
                Ternary Conditional Rendering
            </h2>


            {
                show==="book"
                ?
                <BookDetails/>
                :
                <CourseDetails/>
            }



            <h2>
                Logical AND Rendering
            </h2>


            {
                show==="blog" &&
                <BlogDetails/>
            }



        </div>

    );

}


export default App;