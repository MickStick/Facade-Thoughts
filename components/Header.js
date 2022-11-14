import Link from 'next/link'

export default function Header() {

  return (
    <>
      <header className="bg-gray-100">
        <div className="xl:container xl:auto flex flex-col items-center sm:flex-row sm:justify-between text-cener py-2">
            <div className="w-60 text-center order-1 md:order-2 mb-2 md:mb-0 font-bold">
                <Link href="/">
                    Facade Thoughts
                </Link>
            </div>
            <div className="w-80 md:w-70 h-6 order-2 md:order-1 mb-2 md:mb-0 px-5">
                <input className="custom-input" type="text" placeholder='Search ...'/>
            </div>

            <nav className="w-70 order-3 flex justify-center pr-4"> 
                <ul className="flex gap-6">
                    <Link href="/"> Home </Link>
                    <Link href="/about"> About </Link>
                    <Link href="/blog"> Blog </Link>
                </ul>
            </nav>
        </div>
      </header>
    </>
  )
}
