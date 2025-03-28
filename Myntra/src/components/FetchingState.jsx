import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchingSliceActions } from "../store/FetchingSlice";
import { itemsActions } from "../store/itemsSlice";
const FetchingState = () => {
  const FetchingSlice = useSelector((store) => store.fetching);
  const dispatcher = useDispatch();
  useEffect(() => {
    if (FetchingSlice.fetchDone === false) {
      const controller = new AbortController();
      const signal = controller.signal;
      dispatcher(FetchingSliceActions.setcurrentlyFetching());
      fetch("http://localhost:8080/items", { signal })
        .then((response) => response.json())
        .then((data) => {
          dispatcher(FetchingSliceActions.setFetchDone());
          dispatcher(FetchingSliceActions.setFetchingFinished());
          dispatcher(itemsActions.addInititalState(data.items));
        });
      return () => {
        controller.abort();
      };
    }
  }, [FetchingSlice.fetchDone]);
  return (
    null
  );
};
export default FetchingState;
