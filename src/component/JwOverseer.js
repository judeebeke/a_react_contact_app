import React from 'react';
import Button from './UI/Button';
import { centerItems } from './Style';

const JwOveseer = (props) => {
  return (
    <section>
      {/* Button Container */}
      <div className={`${centerItems} space-x-5 mb-6`}>
        <Button onShow={props.onShow} bgColor="bg-green-500">Add</Button>
        <Button bgColor="bg-red-500">Delete</Button>
      </div>

      {/* FILTER SECTION */}
      <div className={`${centerItems} flex-col mt-6 md:flex-row`}>
        <label htmlFor="members" className='font-bold mr-5 mt-1'>Filter by Title:</label>
        <select name="witness" id="members" className='p-2 mb-3 border-0 rounded-md md:mb-0 md:mr-6'>
          <option>Choose any</option>
          <option value="Elder">Elder</option>
          <option value="Ministerial Servant">Ministerial Servant</option>
          <option value="Auxillary Pioneers">Auxillary Pioneers</option>
          <option value="Regular">Regular</option>
        </select>

        <label htmlFor="age" className='font-bold mr-5 mt-1'>Filter by Age:</label>
        <select name="age-range" id="age" className='p-2 border-0 rounded-md mb-5 
md:mb-0'>
              <option>Choose any</option>
              <option value="Below 18">Below 18</option>
              <option value="19-30">19 - 30</option>
              <option value="31-45">31 - 45</option>
              <option value="46-60">46 - 60</option>
              <option value="Above 60">Above 60</option>
            </select>
      </div>
    </section>
  )
}

export default JwOveseer
