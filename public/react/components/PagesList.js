import React, { useState } from 'react'
import { Page } from './Page'
import { ArticleView } from './ArticleView';
import { EditorView } from './EditorView';
import { AddModeView } from './AddModeView';

export const PagesList = ({ pages, fetchPages }) => {
	const [selectedPage, setSelectedPage] = useState(undefined);
	const [editorMode, setEditorMode] = useState(false);
	const [addPageMode, setAddPageMode] = useState(false);
	let content;
	if (selectedPage == undefined && !addPageMode) {
		let tmp = [];
  		tmp = (pages.map((page, idx) => 
			{return <Page setSelectedPage={setSelectedPage} 
			page={page} key={idx} />}
		));
		content = <>{tmp}<p onClick={() => setAddPageMode(true)}>Add page</p></>
		//+ <p onClick={() => setAddPageMode(true)}>Add page</p>
	} else if (!editorMode && !addPageMode) {
		content = (<ArticleView page={selectedPage} 
		goback={() => setSelectedPage(undefined)} 
		setEditorMode={setEditorMode}/>);
	} else if (editorMode && !addPageMode) {
		content = (<EditorView page={selectedPage} 
			setEditorMode={setEditorMode}
			setSelectedPage={setSelectedPage} />)
	} else if (addPageMode) {
		content = <AddModeView setAddPageMode={setAddPageMode} fetchPages={fetchPages}/>
	}
	return content;
}
