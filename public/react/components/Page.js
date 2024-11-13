import React from 'react'

export const Page = ({page, setSelectedPage}) => {
  // The API returns everything there's absolutely no point making more requests
  return <>
    <h3 onClick={() => setSelectedPage(page.slug)}>{page.title}</h3>
  </>
}
