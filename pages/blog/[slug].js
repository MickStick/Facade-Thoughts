import React from 'react'
import { useRouter } from "next/router";

export default function BlogPost(props) {
    const {query} = useRouter()
  return (
    <main>
      <section className="h-full">
        <h1 className="text-4xl font-bold flex center justify-center align-middle">
          This is Blog Post: {query.slug}</h1>
      </section>
    </main>
  )
}
