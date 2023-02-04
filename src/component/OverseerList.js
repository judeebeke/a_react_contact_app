import React, { useState, useEffect, useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import CartContext from "./../store/cart-context";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import EditMember from "./EditMember";

const OverseerList = (props) => {
  const [checked, setChecked] = useState({ checkbox: false });
  const { showCheckbox, getIdsStore, editMember } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const manageEditHandler = (memberData) => {
    editMember(memberData, props.id);
    showModalHandler();
  };

  const checkboxHandler = (event) => {
    let check = event.target.checked;

    setChecked((prev) => {
      return { ...prev, checkbox: check };
    });

    getIdsStore();
  };

  const falsifyCheckBox = () => {
    setChecked((prev) => {
      return { ...prev, checkbox: false };
    });
  };

  const getDeleteHandler = () => {
    const checkStorage = JSON.parse(localStorage.getItem("jwids")) || [];

    let checkIds = checkStorage.includes(props.id);

    if (checkIds) {
      let cleardeleteIds = checkStorage.filter((item) => item !== props.id);

      localStorage.setItem("jwids", JSON.stringify(cleardeleteIds));
    } else {
      checkStorage.unshift(props.id);

      localStorage.setItem("jwids", JSON.stringify(checkStorage));
    }
  };

  useEffect(() => {
    if (showCheckbox === false) {
      falsifyCheckBox();
    }
    const cleanIds = [];
    localStorage.setItem("jwids", JSON.stringify(cleanIds));
  }, [showCheckbox]);

  return (
    <li className="flex justify-between items-start bg-blue-200 w-full py-2 px-3 rounded sm:w-auto sm:bg-transparent">
      <div className="flex flex-row flex-start">
        {showCheckbox && (
          <input
            className="mr-1 -mt-9"
            name="checkbox"
            type="checkbox"
            onChange={checkboxHandler}
            onClick={() => {
              getDeleteHandler(props.id);
            }}
            checked={checked.checkbox}
          />
        )}
        <span className="py-2 px-3">
          <h3 className="font-semibold text-xl text-blue-700">{`${props.firstname} ${props.lastname}`}</h3>
          <h4 className="font-semibold text-sm text-gray-600">
            {props.title} <span className="ml-3">{props.age}</span>
          </h4>
          <p className="font-normal text-sm h-9 trunate whitespace-pre-wrap overflow-hidden overflow-ellipsis">
            {props.info}
          </p>
        </span>
      </div>
      <Button
        onShow={showModalHandler}
        customStyle="mt-2 float-left md:float-none md:mt-3"
        bgColor="bg-blue-500"
      >
        <AiOutlineEdit />
      </Button>

      {showModal && (
        <Modal onShow={showModalHandler} >
            <EditMember onShow={showModalHandler} onManage={manageEditHandler} firstname={props.firstname} lastname={props.lastname} privelege={props.title} age={props.age} info={props.info} />
        </Modal>
      )}
    </li>
  );
};

export default OverseerList;
