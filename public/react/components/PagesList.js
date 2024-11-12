import React, { useState } from 'react'
import { Page } from './Page'
import { ArticleView } from './ArticleView';

export const PagesList = ({ pages }) => {
	const [selectedPage, setSelectedPage] = useState(undefined)
	let content;
	if (selectedPage == undefined) {
  		content = pages.map((page, idx) => {return <Page setSelectedPage={setSelectedPage} page={page} key={idx} />})
	} else (
		content = <ArticleView slug={selectedPage} />
	)
	return content;
}
