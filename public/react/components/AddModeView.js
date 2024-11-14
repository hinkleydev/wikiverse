import React, {useState} from 'react'
import apiURL from '../api';
import { ArticleForm } from './ArticleForm';

export const AddModeView = ({setAddPageMode, addPage}) => {

    async function submitArticle(e, articleData) {
        e.preventDefault();
        //const articleData = {title, content, name, email, tags : "tag1 tag2"};
        const response = await fetch(apiURL + '/wiki', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              articleData // our data TO CREATE here
            )
        });
        if (response.status == 200) {
            const parsed = await response.json();
            addPage(parsed);
            alert("Article created!");
            setAddPageMode(false);
        } else {
            alert("Error, please try again!")
        }
    }
    return (<>
    <h1>Add new article</h1>
    <div className="article-options">
        <span><u onClick={() => setAddPageMode(false)}>Back</u></span>
    </div>
    <article>
        <ArticleForm submit={submitArticle}/>
    </article>
    </>)
}