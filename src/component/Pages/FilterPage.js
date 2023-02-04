import React, { useContext } from "react";
import OverseerList from "../OverseerList";
import CartContext from "../../store/cart-context";
import {centerItems} from '../Style'

const FilterPage = () => {
  const { filterMembers } = useContext(CartContext);

  return (
    <div>
      <section
        className={`${
          filterMembers.length === 1 ? "flex justify-center"
            : ""
        }`}
      >
        <ul className={`${centerItems} flex-col items-center space-y-3 justify-center sm:grid sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-5 sm:space-y-0`}>
          {filterMembers.length > 0 && filterMembers[0] !== 1 ?
            filterMembers.map((item) => {
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
            }) : ""}
        </ul>

        {filterMembers[0] === 1 && filterMembers.length === 1 ? (
          <h2 className="flex justify-center w-6/12  text-center items-center font-semibold text-xl bg-gray-200 mt-10 rounded">
            No Search Results
          </h2>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default FilterPage;
