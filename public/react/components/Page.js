import React from 'react'

export const Page = ({page, setSelectedPage}) => {
  return <>
    <li onClick={() => setSelectedPage(page)}>{page.title}</li>
  </>
}
