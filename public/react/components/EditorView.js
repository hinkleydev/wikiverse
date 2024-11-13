import React from 'react'

export const EditorView = ({page, setEditorMode}) => {
    return (<>
    <h1>Edit: {page.title}</h1>
    <div className="article-options">
        <span><u onClick={() => setEditorMode(false)}>View</u> | <b>Edit</b></span>
    </div>
    <article>
        {page.content}
    </article>
    </>)
}