import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../components/common/header'
import { MainLayout } from '@/components/layout'

///const Header = dynamic(() => import('../components/common/header'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const route = useRouter()

  console.log('About query: ', route.query)

  const page = route.query?.page

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()

      setPostList(data.data)
    })()
  }, [page])

  function handleNextClick() {
    route.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div>
      <h1>About Page</h1>
      <Header />
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next page</button>
    </div>
  )
}

AboutPage.Layout = MainLayout

export async function getStaticProps() {
  console.log('get static props')
  return {
    props: {},
  }
}
