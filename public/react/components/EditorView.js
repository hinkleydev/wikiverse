import React, {useState} from 'react'

export const EditorView = ({page, setEditorMode}) => {
    const [title, setTitle] = useState(page.title);
    const [content, setContent] = useState(page.content);
    return (<>
    <h1>Edit: {page.title}</h1>
    <div className="article-options">
        <span><u onClick={() => setEditorMode(false)}>View</u> | <b>Edit</b></span>
    </div>
    <article>
        <form>
            <label for="title-editor">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <label for="content-editor">Content</label>
            <textarea id="content-editor" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </form>
    </article>
    </>)
}