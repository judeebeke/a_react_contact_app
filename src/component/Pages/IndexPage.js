import React, { useContext,  useState} from "react";
import {AiFillDelete, AiOutlineClear} from "react-icons/ai";
import MembersPage from "./MemberPage";
import FilterPage from "./FilterPage";
import CartContext from "../../store/cart-context";
import Button from './../UI/Button';
import Modal from "../UI/Modal";

const IndexPage = () => {
  // const checkStorage = JSON.parse(localStorage.getItem("jwmembers")) || [];
  const [showModal, setShowModal] = useState(false)

  const {members, removeMember, showCheckbox, filterMembers, idsStore, errorHandle, loadingHandle} = useContext(CartContext);

  const showModalHandler = () => {
    setShowModal(prev => !prev)
  }


  const mangeDeleteHandler = () => {
    removeMember()
    showModalHandler()
  }

  let loader = <div className="my-20 flex justify-center items-center">
                <span>
                  <i className="fa fa-spinner fa-spin fa-2x"></i>
                </span>
              </div>

  let errorMessage =  <div className="my-10 flex px-5 md:px-0 justify-center items-center">
                          <h2 className="flex justify-center md:w-6/12 text-center items-center font-semibold text-xl bg-gray-200 mt-10 rounded">
                    {errorHandle}
                  </h2>
                </div>

  let content = '';
  if(errorHandle !== null) {
    content = errorMessage;
  } 

  if(loadingHandle === true) {
    content = loader;
  }

  if(members.length > 0 && filterMembers.length < 1 && !loadingHandle) {
    content = <MembersPage existingData={members} />
  }

  if(filterMembers.length > 0) {
    content = <FilterPage />
  }


  return (
    <div className={showCheckbox ? "mt-5 md:mt-8" : ""}>
       {showCheckbox && <Button onShow={showModalHandler} customStyle={`mb-6 md:mb-0 ${idsStore === 0 && "pointer-events-none"}`} bgColor={idsStore === 0 ? "bg-red-400" : "bg-red-500"}>{`Delete ${idsStore}`}</Button>}
        
      {content}

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
