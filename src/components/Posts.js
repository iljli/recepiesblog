import React from 'react'
import Post from './Post'
import { Link, Route, Switch } from "react-router-dom";

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map((article, index) => (
                {/* <Route path={`/articles/:${article.fields.name.replaceAll(" ", "")}?`}> */}
                    <Post article={article} key={index} />
                {/* </Route> */}
            )

            )}
        </div>
    )
}

export default Posts

{/* <Switch> */ }
{/* <Route path={`/articles/:${article.fields.name.replaceAll(" ", "")}?`}> */ }
{/* <Link to={`/articles/${article.fields.name.replaceAll(" ", "")}`}> */ }
// <Post article={article} key={index} />
{/* </Link> */ }
{/* </Route> */ }
{/* </Switch> */ }