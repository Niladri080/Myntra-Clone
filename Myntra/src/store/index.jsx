import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import FetchingSlice from "./FetchingSlice";
import BagSlice from "./BagSlice";
import WishSlice from "./WishSlice";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetching: FetchingSlice.reducer,
    bag: BagSlice.reducer,
    wish:WishSlice.reducer,
  },
});
export default myntraStore;
