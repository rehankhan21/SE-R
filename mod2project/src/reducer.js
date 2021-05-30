export const initialState = {
    arr: [
        {
            id: 1,
            value: ""
        },
        {
            id: 2,
            value: "hello 2"
        }
    ],

    topList: [
    //     {
    //     title: "test",
    //     rank: 21
    // }
    ],

    animeList: [],

    search: "yugioh"
}

export default function reducer(state = initialState, action ) {

    //type of action

    switch(action.type) {

        case 'ADD_ITEM_TOP' :
            // some logic
             return {
                 ...state, // make a copy of the inital state
                 // then only update this specific object in state
                topList: action.payload.arr
             }
        case 'ADD_Anime_List':

             return {
                 ...state,
                 animeList: action.payload.arr 
             }


        default : return state

    }
}