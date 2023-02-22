import {useReducer, useEffect, useState, useCallback} from 'react';

import CartContext from './cart-context';

const defualtMemberFilterState = []

const MemberFilterReducer = (state, action) => {

    if(action.type === 'FILTER') {
        let newFilterState = [];
        
       switch (action.search) {
            case "18":
                newFilterState = action.allMembers.filter(item => {
                     return Number(item.age) <= 18;
                    })
              break;
            case "19":
                newFilterState = action.allMembers.filter(item => {
                    return Number(item.age) >= 19 && Number(item.age) < 31
                })
              break;
            case "31":
                newFilterState = action.allMembers.filter(item => {
                    return Number(item.age) >= 31 && Number(item.age) < 46
                })
              break;
            case "46":
                newFilterState = action.allMembers.filter(item => {
                    return Number(item.age) >= 46 && Number(item.age) < 60
                })
              break;
            case "60":
                newFilterState = action.allMembers.filter(item => {
                    return Number(item.age) >= 60 && Number(item.age) > 60
                })
              break;
            case "Elder":
                newFilterState = action.allMembers.filter(item => {
                    return item.witnessTitle === action.search
                })
              break;
            case "Ministerial Servant":
                newFilterState = action.allMembers.filter(item => {
                    return item.witnessTitle === action.search
                })
              break
            case "Auxillary Pioneer":
                newFilterState = action.allMembers.filter(item => {
                    return item.witnessTitle === action.search
                })
              break
            case "Regular Pioneer":
                newFilterState = action.allMembers.filter(item => {
                    return item.witnessTitle === action.search
                })
              break
            default:
              newFilterState = [1]
          }
            

        if(newFilterState.length === 0) {
            newFilterState = [1]
        }
        return newFilterState;
    }

    if(action.type ==='HOME') {
        let newFilterState = []

        return newFilterState
    }


    return state;
}


const CartProvider = (props) => {
    const [memberFilterState, memberFilterActionDispatcher] = useReducer(MemberFilterReducer, defualtMemberFilterState);
    const [deleteIdsStore, setDeleteIdsStore] = useState(0)
    const [showCheck, setShowCheck] = useState(false)
    const [members, setMembers] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchMembersHandler = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try{
            const responseData = await fetch('https://web-app-c863a-default-rtdb.firebaseio.com/members.json');

            if(!responseData.ok) {
                throw new Error();
            }
            const realData = await responseData.json();

            console.log(realData)
            let transformedData = []

            if(realData === null) {
                setIsLoading(false)
                return setError('No member added!')
            } else {
                for (let key of Object.keys(realData)) {
                    transformedData.push({
                        id: key,
                        firstName: realData[key].firstName,
                        lastName: realData[key].lastName,
                        witnessTitle: realData[key].witnessTitle,
                        age: realData[key].age,
                        info: realData[key].info
                    })
            }
            }
            
        setMembers(transformedData)
        setIsLoading(false)
        setError(null)
        } catch(err){
            if(err) {
                setError('Something went wrong!')
                setIsLoading(false)
            }
        }
    }, [])

    const addItemHandler = async (item) => {
        setIsLoading(true)
        setError(null)

         try{
            const response = await fetch('https://web-app-c863a-default-rtdb.firebaseio.com/members.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body:  JSON.stringify(item),
        })

        if(!response.ok) {
            throw new Error()
        }

        const data = await response.json()

        if(data !== null) {
            fetchMembersHandler()
        }

        setShowCheck(false)
    } catch(error) {
        setError('Error: Failed to add new member!')
        setIsLoading(false)
    }
    }

    const removeItemHandler = async () => {
        let checkIdsStorage = JSON.parse(localStorage.getItem('jwids')) || []
        setIsLoading(true)

            for (let id of checkIdsStorage){
            try{
                const response = await fetch(`https://web-app-c863a-default-rtdb.firebaseio.com/members/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    },
            })

            if(!response.ok) {
                throw new Error()
            }

            setShowCheck(false)
        } catch(error) {
            setError('Error: Failed to delete member!')
        }
    }

        fetchMembersHandler()
        getIdsStoreHandler()

        let clearArray = []
        localStorage.setItem("jwids", JSON.stringify(clearArray));
    }

    const editItemHandler = async (member, id) => {
        // const findMember = members.findIndex(item => item.id === id);
        let edittedMember = {...member[0], id}
        setIsLoading(true)

        try{
            const response = await fetch(`https://web-app-c863a-default-rtdb.firebaseio.com/members/${id}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                },
            body:  JSON.stringify(edittedMember),
        })

        if(!response.ok) {
            throw new Error()
        }

        const data = await response.json()

        if(data !== null) {
            fetchMembersHandler()
        }

        setShowCheck(false)
    } catch(error) {
        setError('Error: Failed to edit member!')
    }
        
    }

    const filterItemHandler = (search) => {
        setIsLoading(true)

        if(search === "nil") {
           return homeHandler();
        }
        
        setTimeout(() => {
            setIsLoading(false)
            memberFilterActionDispatcher({type: 'FILTER', search: search, allMembers: members})
        }, 1000)
    }

    const homeHandler = () => {
        setIsLoading(true)

        setTimeout(() => setIsLoading(false), 1000)

        memberFilterActionDispatcher({type: 'HOME'})

        setShowCheck(false)
    }

    const getIdsStoreHandler = () => {
        let checkIdsStore = JSON.parse(localStorage.getItem('jwids')) || []

        if(checkIdsStore.length === 0 || checkIdsStore.length === undefined) {
            setDeleteIdsStore(0)
        } else {
            setDeleteIdsStore(checkIdsStore.length)
        }
    }

     const setShowCheckHandler = () => {
         getIdsStoreHandler()
        setShowCheck(prev => !prev)
    }

    const memberContext =  {
        members: members,
        filterMembers: memberFilterState,
        showCheckbox: showCheck,
        idsStore: deleteIdsStore,
        checkHandler: setShowCheckHandler,
        addMember: addItemHandler,
        removeMember: removeItemHandler,
        editMember: editItemHandler,
        filterMember: filterItemHandler,
        homeHandle: homeHandler,
        getIdsStore: getIdsStoreHandler,
        errorHandle: error,
        loadingHandle: isLoading
    };


    useEffect(() => {
        fetchMembersHandler()
    }, [fetchMembersHandler])

    return (
        <CartContext.Provider value={memberContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;