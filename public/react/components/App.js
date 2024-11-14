import React, { useEffect, useState } from 'react'
import { PagesList } from './PagesList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  //const [selectedPage, setSelectedPage] = useState()
  const [pages, setPages] = useState([])

  async function fetchPages () {
    console.log("fetchPages")
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }
  useEffect(() => {
    fetchPages()
  }, [])

  function addPage(page) {
    setPages([...pages, page]);
  }

  let content;
  //if (selectedPage == null) {
  content =(
		<main>
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} fetchPages={fetchPages} addPage={addPage}/>
		</main>)
  //)} else {
    //content = <ArticleView slug={selectedPage} />
    //content = <p>{selectedPage}</p>;
  //}

  return content;
}
