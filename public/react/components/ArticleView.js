import React, { useEffect, useState } from 'react'
import apiURL from '../api';

export const ArticleView = ({page, goback, setEditorMode, fetchPages}) => {
    const [metadata, setMetadata] = useState('');
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
    async function getMetadata() {
        let author;
        const res = await fetch(apiURL + '/wiki/' + page.slug);
        const parsed = await res.json();
        if(page.createdAt == page.updatedAt) {
            author = (<p>Created at {page.createdAt} by {parsed.author.name} ({parsed.author.email})</p>)
        } else {
            author = (<><p>Created at {page.createdAt}</p><p>Updated at {page.updatedAt} by {parsed.author.name} ({parsed.author.email})</p></>)
        }
        const tagsHtml = parsed.tags.map((tag, id) => <span key={id}>{tag.name}, </span>)
        setMetadata([<span>Tags: </span>,tagsHtml, author]);
    }
    useEffect(() => {
        getMetadata()
    }, [])
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
        <div className="split-box metadata-box">
            <br />
            {metadata}
        </div>
        <div className="split-box right-lean">
            <button onClick={deleteArticle}>Delete</button>
        </div>
    </div>
    </>)
}
