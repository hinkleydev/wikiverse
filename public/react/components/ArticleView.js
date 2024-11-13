import React from 'react'
import apiURL from '../api'

export const ArticleView = ({slug, goback}) => {
    //const page = await fetch(apiURL + '/wiki/' + slug)
    return (<>
    <span onClick={goback}>Go back</span>
    <h1>{slug}</h1>
    </>)
}
