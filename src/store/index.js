import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detial from "./modules/detial"
import main from "./modules/main"

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detial,
        main
    }
})

export default store