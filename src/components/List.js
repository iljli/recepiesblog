import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from "react-router-dom";

const List = ({ posts }) => {

    // useEffect(() => {
    //     posts.map((article) => console.log(article.fields.name));
    // })

    return (
        <div className="listOfArticles">
            {/* {posts.map((article, index) => <p key={index}> {article.fields.name} </p>)} */}
            {posts.map((article, index) =>
                <div>
                    {/* <p key={index}> {article.fields.name} </p> */}
                    <Link className="linkToArticle" to={`/articles/${article.fields.name.replaceAll(" ", "")}`}>
                        {/* <Route className="linkToArticle" path={`/articles/:${article.fields.name.replaceAll(" ", "")}?`}> */}
                        {article.fields.name}
                        {/* </Route> */}
                    </Link>
                </div>
            )}
        </div>
    )
}


export default List

