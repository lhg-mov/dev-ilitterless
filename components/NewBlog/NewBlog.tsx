import React from 'react'
import NewBlogClient from './NewBlogClient'
import NewBlogRender from './NewBlogRender'

const NewBlog = () => {
  return (
    <NewBlogClient>
      <NewBlogRender/>
    </NewBlogClient>
  )
}

export default NewBlog