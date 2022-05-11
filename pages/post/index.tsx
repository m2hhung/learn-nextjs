import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'

export interface PostProps {
  posts: any[]
}

export default function Post({ posts }: PostProps) {
  return (
    <div>
      <h1>post index 2</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.date}>
            {post.title}
            <br />
            {post.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
  const response = await fetch('https://www.justice.gov/api/v1/blog_entries.json')
  const data = await response.json()
  return {
    props: {
      posts: data.results.map((x: any) => ({ title: x.title, date: x.date })),
    },
  }
}
