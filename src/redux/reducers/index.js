const  initial = {
    people: [],
    planets:[]
};
export const reducer = (state=initial, action) => {
    switch (action.type){
        case 'SET_PEOPLE':
            return {
                ...state,
                people:[
                    ...state.people,
                    ...action.payload
                ]
            }
        case 'SET_PLANETS':
            return {
                ...state,
                planets:[
                    ...state.planets,
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}