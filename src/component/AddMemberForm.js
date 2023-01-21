import React from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

const AddMemberForm = (props) => {
  return (
    <form className="flex justify-center flex-col items-center sm:grid sm:gap-2 sm:grid-cols-2 sm:py-5 sm:space-y-4">
      <label htmlFor="firstname" className="font-bold mt-5 sm:mt-0">
        First Name
      </label>
      <Input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Firstname"
      />

      <label htmlFor="lirstname" className="font-bold mt-4 sm:mt-0">
        Lastname Name
      </label>
      <Input
        type="text"
        name="lastName"
        id="firstName"
        placeholder="Lastname"
      />

      <label htmlFor="title" className="font-bold mt-4 sm:mt-0">
        Title
      </label>
      <select
        name="witness"
        id="title"
        className="p-2 mb-3 border-0 rounded-md md:mb-0 md:mr-6 focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option>Choose any</option>
        <option value="Elder">Elder</option>
        <option value="Ministerial Servant">Ministerial Servant</option>
        <option value="Auxillary Pioneers">Auxillary Pioneers</option>
        <option value="Regular">Regular</option>
      </select>

      <label htmlFor="selectAge" className="font-bold mt-4 sm:mt-0">
        Age
      </label>
      <Input
        type="number"
        name="age"
        id="selectAge"
        placeholder="Age"
        min="7"
      />
      <div className="flex flex-row space-x-12 my-5 sm:my-0">
        <Button type="button" onShow={props.onShow} bgColor="bg-gray-300">
          Clear
        </Button>
        <Button type="submit" onShow={props.onShow} bgColor="bg-green-500">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddMemberForm;
