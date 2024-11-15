import React, {useState} from "react";

export const ArticleForm = (props) => {
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const [tags, setTags] = useState(props.tags)

    return (<>
    <form className="all-width" onSubmit={ (e) => props.submit(e, {title, content, name, email, tags}) }>
            <label for="title-editor">Title</label>
            <input id="title-editor" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <label for="content-editor">Content</label>
            <textarea style={{height: "10em"}} id="content-editor" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <label for="username-editor">Author username</label>
            <input id="username-editor" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label for="email-editor">Author email</label>
            <input id="email-editor" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label for="tags-editor">Tags</label>
            <input id="tags-editor" type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Space seperated tags"></input>
            <button className="submit-button" type="submit" value="submit">Confirm</button>
        </form>
    </>)
}