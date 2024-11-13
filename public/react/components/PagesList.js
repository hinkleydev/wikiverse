import React, { useState } from 'react'
import { Page } from './Page'
import { ArticleView } from './ArticleView';
import { EditorView } from './EditorView';

export const PagesList = ({ pages }) => {
	const [selectedPage, setSelectedPage] = useState(undefined);
	const [editorMode, setEditorMode] = useState(false);
	let content;
	if (selectedPage == undefined) {
  		content = pages.map((page, idx) => {return <Page setSelectedPage={setSelectedPage} page={page} key={idx} />})
	} else if (editorMode == false) {
		content = (<ArticleView page={selectedPage} 
		goback={() => setSelectedPage(undefined)} 
		setEditorMode={setEditorMode}/>);
	} else {
		content = (<EditorView page={selectedPage} 
			setEditorMode={setEditorMode}
			setSelectedPage={setSelectedPage} />)
	}
	return content;
}
