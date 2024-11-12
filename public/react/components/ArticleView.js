import React from 'react'
import apiURL from '../api'

export const ArticleView = ({slug}) => {
    //const page = await fetch(apiURL + '/wiki/' + slug)
    return (<>
    <h1>{slug}</h1>
    </>)
}
