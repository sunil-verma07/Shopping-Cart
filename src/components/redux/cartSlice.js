const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        
        add: (state, action) => {
            const itemInCart = state.find((item) => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;