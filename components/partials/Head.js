import Head from "next/head"

export default function HTMLHead({title, meta}) {
  return (
    <Head>
        <title>{title || "Facade Thoughts"}</title>
        {meta ? meta.map((el, index) => {
            return (
                <mata key={index} name={el.name} content={el.content} description={el.description}/>
            )
        }) : null}
    </Head>
  )
}
