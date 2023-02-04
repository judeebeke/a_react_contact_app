import React, { useContext,  useState } from "react";
import {AiFillDelete, AiOutlineClear} from "react-icons/ai";
import MembersPage from "./MemberPage";
import FilterPage from "./FilterPage";
import CartContext from "../../store/cart-context";
import Button from './../UI/Button';
import Modal from "../UI/Modal";

const IndexPage = () => {
  const checkStorage = JSON.parse(localStorage.getItem("jwmembers")) || [];
  const [showModal, setShowModal] = useState(false)
  const {removeMember, showCheckbox, filterMembers, idsStore} = useContext(CartContext);

  const showModalHandler = () => {
    setShowModal(prev => !prev)
  }

  const mangeDeleteHandler = () => {
    removeMember()
    showModalHandler()
  }

  return (
    <div className={showCheckbox ? "mt-5 md:mt-8" : ""}>
       {showCheckbox && <Button onShow={showModalHandler} customStyle='mb-6 md:mb-0' bgColor="bg-red-500">{`Delete ${idsStore}`}</Button>}
      {filterMembers.length > 0 ? (
        <FilterPage />
      ) : (
        <MembersPage existingData={checkStorage}/>
      )}
      {showModal && <Modal>
        <div className="my-20 flex justify-center items-center flex-col space-y-6">
            <h1 className="font-bold text-xl">Are sure you want to delete?</h1>
            <div className="flex justify-center space-x-6">
                <Button onShow={showModalHandler} customStyle="px-3 py-2 text-2xl" bgColor="bg-gray-500"><AiOutlineClear /></Button>
                <Button onShow={mangeDeleteHandler} customStyle="px-3 py-2 text-2xl" bgColor="bg-red-500"><AiFillDelete /></Button>
            </div>
        </div>
      </Modal>}
    </div>
  );
};

export default IndexPage;
