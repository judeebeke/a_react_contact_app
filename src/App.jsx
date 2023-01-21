import React, {useState} from 'react';
import JwOveseer from './component/JwOverseer';
import Modal from './component/UI/Modal';
import AddMemberForm from './component/AddMemberForm';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Page from './component/Pages/Page';
import ContextProvider from './store/CartProvider';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(prev => !prev)
  }

  return (
    <ContextProvider>
      <Nav />
      <main className='container mx-auto px-6 font-sans'>
        <JwOveseer onShow={showModalHandler} />
        <Page />
      </main>
      <Footer />
      {showModal && <Modal onShow={showModalHandler}>
        <AddMemberForm onShow={showModalHandler} />
      </Modal>}
    </ContextProvider>
  )
}

export default App

