import React, {useState, useContext} from 'react';
import {AiFillDelete, AiOutlineClear, AiOutlineUserAdd, AiOutlineHome} from "react-icons/ai";
import Button from './UI/Button';
import { centerItems } from './Style';
import CartContext from '../store/cart-context';

const JwOveseer = (props) => {
  const {filterMembers, showCheckbox, checkHandler, filterMember, homeHandle} = useContext(CartContext);
  const [filterValue, setFilterValue] = useState("")

  const filterItemHandler = (event) => {
    let value = event.target.value
      if(value === "") {
        setFilterValue("Choose any")
      } else {
        filterMember(value)
        setFilterValue(value)
      }
    
  }
  
  return (
    <section>
      {/* Button Container */}
      <div className={`${centerItems} space-x-5 mb-6`}>
        <Button onShow={homeHandle} customStyle="px-3 py-2 text-2xl " bgColor="bg-blue-700"><AiOutlineHome /></Button>
        <Button onShow={props.onShow} customStyle="px-3 py-2 text-2xl" bgColor="bg-green-500"><AiOutlineUserAdd /></Button>
        <Button onShow={checkHandler} customStyle="px-3 py-2 text-2xl" bgColor={showCheckbox ? "bg-gray-500" :  "bg-red-500"}>{showCheckbox ? <AiOutlineClear /> :  <AiFillDelete />}</Button>
      </div>

      {/* FILTER SECTION */}
      <div className={`${centerItems} flex-col mt-6 md:flex-row`}>
        <label htmlFor="members" className='font-bold mr-5 mt-1'>Filter by Privilege:</label>
        <select name="witness" id="members" onChange={filterItemHandler} className='p-2 mb-3 border-0 rounded-md md:mb-0 md:mr-6' value={filterMembers.length === 0 ? "Choose any" : filterValue}>
          <option value="">Choose any</option>
          <option value="Elder">Elder</option>
          <option value="Ministerial Servant">Ministerial Servant</option>
          <option value="Auxillary Pioneer">Auxillary Pioneer</option>
          <option value="Regular Pioneer">Regular Pioneer</option>
        </select>

        <label htmlFor="age" className='font-bold mr-5 mt-1'>Filter by Age:</label>
        <select name="age-range" id="age" onChange={filterItemHandler} className='p-2 border-0 rounded-md mb-5 
md:mb-0' value={filterMembers.length === 0 ? "Choose any" : filterValue}>
              <option value="">Choose any</option>
              <option value={18}>Below 18</option>
              <option value={19}>19 - 30</option>
              <option value={31}>31 - 45</option>
              <option value={46}>46 - 60</option>
              <option value={60}>Above 60</option>
            </select>
      </div>
    </section>
  )
}

export default JwOveseer
