import React, { useState } from "react";
import JwOveseer from "./component/JwOverseer";
import Modal from "./component/UI/Modal";
import AddMemberForm from "./component/AddMemberForm";
import Nav from "./component/Nav";
import IndexPage from "./component/Pages/IndexPage";
import ContextProvider from "./store/CartProvider";
import Footer from './component/Footer';
// import Loader from './component/UI/Loader';
// import { centerItems } from './component/Style';

const App = () => {
  const [showModal, setShowModal] = useState(false);
 

  const showModalHandler = () => {
    setShowModal((prev) => {
      return !prev
    });
  };

  return (
    <ContextProvider>
      <section className={`bg-blue-700`}>
        <Nav />
      </section>
      <main className="container mx-auto px-7 pb-9 font-sans">
        <JwOveseer onShow={showModalHandler} />
        <IndexPage />
      </main>
      {/* <Footer /> */}
      {showModal && (
        <Modal onShow={showModalHandler}>
          <AddMemberForm onShow={showModalHandler} />
        </Modal>
      )}
      {/* <Loader /> */}
    </ContextProvider>
  );
};

export default App;
