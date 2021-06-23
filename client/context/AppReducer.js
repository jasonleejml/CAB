export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTION':
            console.log('GET_TRANSACTION HAPPENED')
            return {
                ... state,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            console.log('DELETE_TRANSACTION HAPPENED')
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            console.log('ADD_TRANSACTION HAPPENED')
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'UPDATE_DATE':
            console.log('UPDATE_DATE HAPPENED')
            return {
                ...state,
                month: action.payload.month,
                year: action.payload.year
            }
        default:
            return state;
    }
}