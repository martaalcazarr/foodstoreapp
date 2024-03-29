import Head from "next/head";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Image from "next/image";


export default function AdminLayout({children, page}) {

    
    return (
        <>
        <Head>
            <title>Coffe - {page}</title>
            <meta name="description" content="Coffee Shop"/>
        </Head>
        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
            <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                  
                    {children}
                </div>
            </main>
        </div>
        <ToastContainer />
        </>
    )
}