import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import useStore from "../hooks/useStore";
import ModalProduct from "../components/ModalProduct";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#__next'); //en vite es #root, en next es #__next (f12-elements-body-div)

export default function Layout({children, page}) {

    const {modal} = useStore()
    return (
        <>
        <Head>
            <title>Coffe - {page}</title>
            <meta name="description" content="Coffee Shop"/>
        </Head>
        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <Sidebar />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
        </div>
        {modal && (
            <Modal
                isOpen={modal}
                style={customStyles}
            >
                <ModalProduct/>
            </Modal>
        )}
        </>
    )
}