import React from 'react'

export const Page = ({page, setSelectedPage}) => {
  return <>
    <h3 onClick={() => setSelectedPage(page)}>{page.title}</h3>
  </>
}
