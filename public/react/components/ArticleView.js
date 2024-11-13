import React from 'react'

export const ArticleView = ({page, goback, setEditorMode}) => {
    // The API returns everything there's absolutely no point making more requests
    return (<>
    <span onClick={goback} className="return-button">Go back</span>
    <h1>{page.title}</h1>
    <div className="article-options">
        <span><b>View</b> | <u onClick={() => setEditorMode(true)}>Edit</u></span>
    </div>
    <article>
        {page.content}
    </article>
    </>)
}
