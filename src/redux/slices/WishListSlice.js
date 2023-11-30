const { createSlice } = require("@reduxjs/toolkit");



const wishListSlice = createSlice({
    name:'wishlist',
    initialState:[], //since this state have to hold more than one items
    reducers:{
        //actions
        //functions to add items to wishlist array state
        addToWishlist:(state , action)=>{
          state.push(action.payload)
        },
        //function to remove items from wishlist array state
        removeFromWishlist : (state , action)=>{
          return state.filter(item=>item.id!==action.payload)

        }

    }
})

export const {addToWishlist , removeFromWishlist} = wishListSlice.actions

export default wishListSlice.reducer