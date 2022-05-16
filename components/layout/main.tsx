import { LayoutProps } from '@/models/index'
import Link from 'next/link'
import React, { useEffect } from 'react'

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mounting')

    return () => console.log('unmounting')
  }, [])
  return (
    <div>
      <h1>main layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  )
}
