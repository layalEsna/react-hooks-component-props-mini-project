// import React from "react";
// import Article from "./Article"; 

// function ArticleList({ posts }) {
//     return (
//         <main>
//             {posts.map(post => (
//                     <Article
//                         key={post.id}
//                         title={post.title}
//                         date={post.date}
//                     preview={post.preview}
//                 />
//             ))

//             }

//         </main>
//     )
// }

// export default ArticleList

import React from "react";
import Article from "./Article.js"; // Correctly import Article component

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map(post => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date} // Correct the prop name from 'data' to 'date'
                    preview={post.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;
