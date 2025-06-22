import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["form.register"],
      },
    }),
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const persistor = persistStore(appStore);
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
