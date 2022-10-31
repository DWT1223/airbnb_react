import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detial from "./modules/detial"

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detial:detial
    }
})

export default store