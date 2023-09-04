import Head from "next/head";

export default function Layout({children, page}) {
    return (
        <>
        <Head>
            <title>Coffe - {page}</title>
            <meta name="description" content="Coffee Shop"/>
        </Head>
        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                sidebar
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                {children}
            </main>
        </div>
        </>
    )
}