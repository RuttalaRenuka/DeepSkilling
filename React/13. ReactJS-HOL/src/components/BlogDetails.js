import React from "react";


function BlogDetails(){

    const blogs=[
        {
            id:1,
            title:"React Introduction"
        },
        {
            id:2,
            title:"JavaScript ES6 Features"
        }
    ];


    return(

        <div>

            <h2>Blog Details</h2>


            {
                blogs.map((blog)=>(
                    <p key={blog.id}>
                        {blog.title}
                    </p>
                ))
            }


        </div>

    );

}


export default BlogDetails;