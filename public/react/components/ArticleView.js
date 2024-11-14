import React from 'react'
import apiURL from '../api';

export const ArticleView = ({page, goback, setEditorMode, fetchPages}) => {
    // The API returns everything there's absolutely no point making more requests
    async function deleteArticle() {
        const response = await fetch(apiURL + '/wiki/' + page.slug, {
            method: "DELETE"
        });
        alert("Article deleted!");
        await fetchPages();
        setEditorMode(false);
        goback();
    }
    return (<>
    <span onClick={goback} className="return-button">Go back</span>
    <h1>{page.title}</h1>
    <div className="article-options">
        <span><b>View</b> | <u onClick={() => setEditorMode(true)}>Edit</u></span>
    </div>
    <article>
        {page.content}
    </article>
    <button onClick={deleteArticle}>Delete</button>
    </>)
}
