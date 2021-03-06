import Link from 'next/link'
import * as React from 'react'
import { LayoutProps } from '@/models/index'

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>admin layout</h1>
      <div>sidebar</div>
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
