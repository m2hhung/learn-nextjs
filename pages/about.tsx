import { closeSync } from 'fs'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const route = useRouter()
  console.log(route.query)
  return <div>About page</div>
}
