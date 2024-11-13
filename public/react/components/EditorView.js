import React, {useState} from 'react'
import apiURL from '../api';
import { ArticleForm } from './ArticleForm';

export const EditorView = ({page, setEditorMode, setSelectedPage}) => {

    async function submitEdits(e, articleData) {
        e.preventDefault();
        //const articleData = {title, content, name, email, tags : "tag1 tag2"};
        const response = await fetch(apiURL + '/wiki/' + page.slug, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              articleData // our data TO CREATE here
            )
        });
        if (response.status == 200) {
            alert("Article updated!");
            const parsed = await response.json();
            const newPage = Object.assign(page, parsed)
            setSelectedPage(newPage);
            setEditorMode(false);
        } else {
            alert("Error, please try again!")
        }
    }
    return (<>
    <h1>Edit: {page.title}</h1>
    <div className="article-options">
        <span><u onClick={() => setEditorMode(false)}>View</u> | <b>Edit</b></span>
    </div>
    <article>
        <ArticleForm title={page.title} content={page.content} tags={page.tags} submit={submitEdits}/>
    </article>
    </>)
}