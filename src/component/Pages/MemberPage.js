import React, { useContext } from "react";
import OverseerList from "../OverseerList";
import CartContext from "../../store/cart-context";
import {centerItems} from '../Style'

const MembersPage = (props) => {
  const { members } = useContext(CartContext);

  // const checkStorage = JSON.parse(localStorage.getItem("jwmembers")) || [];

  return (
    <div>
      <section
        className={`${
          props.existingData.length === 0 && members.length < 1
            ? "flex justify-center"
            : ""
        }`}
      >
        <ul className={`${centerItems} flex-col items-center space-y-3 justify-center sm:grid sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-4 sm:space-y-0`}>
          {members.length === 0 &&
            props.existingData.map((item) => {
              return (
                <OverseerList
                  key={item.id}
                  id={item.id}
                  firstname={item.firstName} 
                  lastname={item.lastName}
                  title={item.witnessTitle}
                  age={item.age}
                  info={item.info}
                />
              );
            })}

          {members.length > 0 &&
            members.map((item) => {
              return (
                <OverseerList
                  key={item.id}
                  id={item.id}
                  firstname={item.firstName} 
                  lastname={item.lastName}
                  title={item.witnessTitle}
                  age={item.age}
                  info={item.info}
                />
              );
            })}
        </ul>

        {props.existingData.length === 0 && members.length < 1 ? (
          <h2 className="flex justify-center w-6/12  text-center items-center font-semibold text-xl bg-gray-200 mt-10 rounded">
            No Member Added
          </h2>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default MembersPage;
