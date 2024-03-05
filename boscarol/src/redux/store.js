//importamos configureStore desde @reduxjs/toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";
//importamos nuestr/s reducer/s
import counterOne from "./slices/counterOne";
import counterTwo from "./slices/counterTwo";

export default configureStore({
  reducer: {
    reducerOne: counterOne,
    reducerTwo: counterTwo,
  },
});

//Crear las acciones
import { createAction } from "@reduxjs/toolkit";
const increment = createAction("counter/increment");
let action = increment();
// {type: "counter/increment"}
action = increment(3);
// returns {type: "counter/increment", payload: 3}
console.log(`The action type is: ${increment}`);
//devuelve: "The action type is: counter/increment"

//----------------------
//createReducer() permite proporcionar una tabla de búsqueda de funciones para cada action type en lugar de usar el switch...case
import { createAction, createReducer } from "@reduxjs/toolkit";
//const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");
const incrementByAmount = createAction("counter/incrementByAmount");

const initialState = { value: 0 };
const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});

//createSlice() permite tener varios reducer distintos para manejar nuestro store. La función acepta un objeto de reducers, un nombre para el slice, y un valor de estado inicial, y genera automáticamente un slice reducer con los action creator y action types correspondientes.
