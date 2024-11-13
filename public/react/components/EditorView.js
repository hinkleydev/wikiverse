import React, {useState} from 'react'
import apiURL from '../api';

export const EditorView = ({page, setEditorMode, setSelectedPage}) => {
    const [title, setTitle] = useState(page.title);
    const [content, setContent] = useState(page.content);
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");

    async function submitEdits(e) {
        e.preventDefault();
        const articleData = {title, content, name, email, tags : "tag1 tag2"};
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
        <form onSubmit={submitEdits}>
            <label for="title-editor">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <label for="content-editor">Content</label>
            <textarea id="content-editor" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <label for="username-editor">Author username</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label for="email-editor">Author email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="submit" value="submit"></input>
        </form>
    </article>
    </>)
}