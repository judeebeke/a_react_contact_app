import {useReducer, useEffect, useState} from 'react';
// import firestore from '../component/config/firebase';

import CartContext from './cart-context';

const defualtMemberState = []

const MemberReducer = (state, action) => {
    
    
    if(action.type === 'ADD') {
        let checkStorage = JSON.parse(localStorage.getItem('jwmembers')) || []
        const newMembers = checkStorage.concat(action.member)

       const newMembersState = newMembers

        return newMembersState;
    }

    if(action.type === 'REMOVE') {
        let checkIdsStorage = JSON.parse(localStorage.getItem('jwids')) || []
        for (let id of checkIdsStorage) {
            let checkMemberStorage = JSON.parse(localStorage.getItem('jwmembers')) || []
            let notDeletedMember = checkMemberStorage.filter((item) => {
                return item.id !== id;
            });
            localStorage.setItem("jwmembers", JSON.stringify(notDeletedMember));
    }

   
    checkIdsStorage = [];

    localStorage.setItem("jwids", JSON.stringify(checkIdsStorage));

    let updatedMembers = JSON.parse(localStorage.getItem('jwmembers'));

    return updatedMembers;
    }

    if(action.type === 'EDIT') {
        let checkStorage = JSON.parse(localStorage.getItem('jwmembers')) || []

        console.log(checkStorage)

        const findMember = checkStorage.findIndex(item => item.id === action.id);
        
        console.log(findMember)

        checkStorage[findMember] = {...action.memberInfo[0], id: action.id}

       const newMembersState = checkStorage;

       localStorage.setItem("jwmembers", JSON.stringify(checkStorage));

        return newMembersState;
    }

    return state;
}

const defualtMemberFilterState = []

const MemberFilterReducer = (state, action) => {


    if(action.type === 'FILTER') {
    const checkStorage = JSON.parse(localStorage.getItem('jwmembers')) || []

        let newFilterState = [];
        
       switch (action.search) {
            case "18":
                newFilterState = checkStorage.filter(item => {
                     return Number(item.age) <= 18;
                    })
              break;
            case "19":
                newFilterState = checkStorage.filter(item => {
                    return Number(item.age) >= 19 && Number(item.age) < 31
                })
              break;
            case "31":
                newFilterState = checkStorage.filter(item => {
                    return Number(item.age) >= 31 && Number(item.age) < 46
                })
              break;
            case "46":
                newFilterState = checkStorage.filter(item => {
                    return Number(item.age) >= 46 && Number(item.age) < 60
                })
              break;
            case "60":
                newFilterState = checkStorage.filter(item => {
                    return Number(item.age) >= 60 && Number(item.age) > 60
                })
              break;
            case "Elder":
                newFilterState = checkStorage.filter(item => {
                    return item.witnessTitle === action.search
                })
              break;
            case "Ministerial Servant":
                newFilterState = checkStorage.filter(item => {
                    return item.witnessTitle === action.search
                })
              break
            case "Auxillary Pioneer":
                newFilterState = checkStorage.filter(item => {
                    return item.witnessTitle === action.search
                })
              break
            case "Regular Pioneer":
                newFilterState = checkStorage.filter(item => {
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
    const [memberState, memberActionDispatcher] = useReducer(MemberReducer, defualtMemberState);
    const [memberFilterState, memberFilterActionDispatcher] = useReducer(MemberFilterReducer, defualtMemberFilterState);
    const [deleteIdsStore, setDeleteIdsStore] = useState(0)
    const [showCheck, setShowCheck] = useState(false)

    const addItemHandler = (item) => {
        memberActionDispatcher({type: 'ADD', member: item})
        setShowCheck(false)
    }

    const removeItemHandler = () => {
        memberActionDispatcher({type: 'REMOVE'})

        getIdsStoreHandler()
        setDeleteIdsStore(0)
    }

    const editItemHandler = (member, id) => {
        memberActionDispatcher({type: 'EDIT', memberInfo: member, id: id})
    }

    const filterItemHandler = (search) => {
        memberFilterActionDispatcher({type: 'FILTER', search: search})
    }

    const homeHandler = () => {
        memberFilterActionDispatcher({type: 'HOME'})
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

    const memberContext = {
        members: memberState,
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
    }


    // const getMembersFromDB = () => {
    //     console.log(firestore)
    //     firestore.collection('congregation_Data').get().then((snapshot) => {
    //         console.log(snapshot.docs)
    //         // snapshot.docs.forEach(doc => {
    //         // console.log(doc.data())
    //         // })
    //     })
    // }

    useEffect(() => {
        if(memberState.length > 0) {
            localStorage.setItem("jwmembers", JSON.stringify(memberState))
        } else {
            setShowCheck(false)
        }
        
    }, [memberState])

    // useEffect(() => {
    //     if(memberFilterState.length > 0) {
    //         localStorage.setItem("filtermembers", JSON.stringify(memberFilterState))
    //     }
        
    // }, [memberFilterState])

    return (
        <CartContext.Provider value={memberContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;