import React, {useState, useContext} from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import CartContext from "../store/cart-context";


const AddMemberForm = (props) => {
  const {addMember, homeHandle} = useContext(CartContext);

  const [inputFormState, setInputFormState] = useState({
      firstName: "",
      lastName: "",
      witnessTitle: "",
      age: "",
      info: ""
    })
    const [errorMessage, setErrorMessage] = useState("")

    const formInputsHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if(name === "firstName") {
          setErrorMessage("")
        } else if (name === "lastName") {
          setErrorMessage("")
        } else if (name === "witnessTitle") {
          setErrorMessage("")
        } else {
          setErrorMessage("")
        }

          setInputFormState(prev => {
            return(
                {...prev, [name]: value}
            )
        })

      }
      
      const formSubmitHandler = (event) => {
        event.preventDefault();

        // addMember({...inputFormState, id: Math.random().toFixed(3)})

        if(inputFormState.firstName === "") {
           setErrorMessage("Please Enter First Name");
        } else if(inputFormState.lastName === "") {
          // setErrorMessage("")
           setErrorMessage("Please enter LastName")
        } else if(inputFormState.witnessTitle === "") {
           setErrorMessage("Please enter Title")
        } else if(inputFormState.age === "") {
           setErrorMessage("Please enter Age")
        } else {
          let getData = {...inputFormState};
          addMember(getData)
          props.onShow()
        }

        homeHandle()
      }

  return (
    <form className="flex justify-center flex-col items-center sm:grid sm:gap-2 sm:grid-cols-2 sm:py-5 sm:space-y-2">
      <label htmlFor="firstname" className="font-bold mt-5 sm:mt-0">
        First Name
      </label>
      <Input
        type="text"
        name="firstName"
        id="firstName"
        value={inputFormState.firstName}
        onChange={formInputsHandler}
        placeholder="Firstname"
        required="required"
      />

      <label htmlFor="lastname" className="font-bold mt-4 sm:mt-0">
        Last Name
      </label>
      <Input
        type="text"
        name="lastName"
        id="firstName"
        onChange={formInputsHandler}
        value={inputFormState.lastName}
        placeholder="Lastname"
        required="required"
      />

      <label htmlFor="title" className="font-bold mt-4 sm:mt-0">
        Privilege
      </label>
      <select
        id="title"
        name="witnessTitle"
        onChange={formInputsHandler}
        className="p-2 mb-3 border-0 rounded-md md:mb-0 md:mr-6 focus:outline-none focus:ring focus:ring-blue-200"
        value={inputFormState.witnessTitle}
        required
      >
        <option value="">-- Choose --</option>
        <option value="Elder">Elder</option>
        <option value="Ministerial Servant">Ministerial Servant</option>
        <option value="Auxillary Pioneer">Auxillary Pioneer</option>
        <option value="Regular Pioneer">Regular Pioneer</option>
      </select>

      <label htmlFor="selectAge" className="font-bold mt-4 sm:mt-0">
        Age
      </label>
      <Input
        type="number"
        name="age"
        id="selectAge"
        onChange={formInputsHandler}
        value={inputFormState.age}
        placeholder="Age"
        min="7"
        required="required"
      />
      <label htmlFor="description" className="font-bold mt-4 sm:mt-0">
        Info
      </label>
      <textarea
        name="info"
        id="description"
        className="px-2 py-1 border-0 rounded text-md placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-200 w-11/12 sm:w-auto"
        onChange={formInputsHandler}
        maxLength="45"
        value={inputFormState.info}
        placeholder="Location and Phone E.g 'Kaduna, 09023176326'"
         />

         <p className="font-bold text-sm mt-3">{errorMessage}</p>

      <div className="flex flex-row space-x-12 my-5 sm:my-0">
        <Button type="button" onShow={props.onShow} bgColor="bg-gray-300">
          Clear
        </Button>
        <Button type="submit" onShow={formSubmitHandler} bgColor="bg-green-500">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddMemberForm;
