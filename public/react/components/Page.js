import React from 'react'

export const Page = ({page, setSelectedPage}) => {
  return <>
    <u><li onClick={() => setSelectedPage(page)}>{page.title}</li></u>
  </>
}
