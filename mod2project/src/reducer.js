export const initialState = {
    arr: [
        {
            value: ""
        }
    ]
}

export default function reducer(state = initialState, action ) {

    //type of action

    switch(action.type) {

        case 'ADD_ITEM' :
            // some logic

            return state
        

        default :

            return state

    }
}