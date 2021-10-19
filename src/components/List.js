// import React, { useState, useEffect } from 'react';
// import { Link, Route, Switch } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const List = ({ posts }) => {

    // useEffect(() => {
    //     posts.map((article) => console.log(article.fields.name));
    // })
    posts.map((article, index) => (
        console.log(article.fields.name.replaceAll(" ", ""))))

    return (
        <ul className="listOfArticles">
            {posts.map((article, index) =>
                <li>
                    <HashLink className="linkToArticle" smooth to={`/page#${article.fields.name.replaceAll(" ", "")}`} key={index}>
                        {article.fields.name}
                    </HashLink>
                </li>
            )}
        </ul>
    )
}


export default List

