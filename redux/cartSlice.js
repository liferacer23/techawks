import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    
    name:"cart",
    initialState:{
        items:[],
        orders:[],
        quantity:0,
        total:0,
    },

    reducers:{
        addItems:(state,action)=>{
                state.items.push(action.payload)
                
                state.quantity+=1;
                state.total+=action.payload.price
        },
        addOrders:(state,action)=>{
                state.orders.push(action.payload)
        },
        removeItems:(state,action)=>{
            //state.items.push(action.payload.productId);
          state.items=state.items.filter(item => item.productId !== action.payload.item.productId);
         
          state.total-=action.payload.item.price
          
        }, 
        removeOrders:(state,action)=>{
            //state.items.push(action.payload.productId);
          state.orders=state.orders.filter(item => item.productId !== action.payload.item.productId);
        
          
        }, 
        reset:(state)=>{
            state.items=[];
            state.quantity=0;
            state.total=0;
        },


    }


});

export const {addItems,reset,removeItems,addOrders,removeOrders}=cartSlice.actions;
export default cartSlice.reducer;