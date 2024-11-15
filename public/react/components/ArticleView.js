import React from 'react'
import apiURL from '../api';

export const ArticleView = ({page, goback, setEditorMode, fetchPages}) => {
    // The API returns everything there's absolutely no point making more requests
    async function deleteArticle() {
        const doubleCheck = confirm("You are about to delete '" + page.title + "', are you sure?");
        if (doubleCheck == false) {
            return; // Cancel if they say no
        }
        const response = await fetch(apiURL + '/wiki/' + page.slug, {
            method: "DELETE"
        });
        alert("Article deleted!");
        await fetchPages();
        setEditorMode(false);
        goback();
    }
    return (<>
    <div className="split-wrapping">
        <div className="split-box">
            <h2>{page.title}</h2>
        </div>
        <div className="split-box right-lean">
            <span onClick={goback}>Go back</span>
        </div>
    </div>
    <div className="article-options">
        <span><b>View</b> | <u onClick={() => setEditorMode(true)}>Edit</u></span>
    </div>
    <article>
        {page.content}
    </article>
    <div className="split-wrapping">
        <div className="split-box">
            <p>Data</p>
        </div>
        <div className="split-box right-lean">
            <button onClick={deleteArticle}>Delete</button>
        </div>
    </div>
    </>)
}
