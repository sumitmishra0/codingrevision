import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { todoReducer } from "../Redux/app/todoReducer";
import { authReducer } from "./auth/AuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  app: todoReducer,
  auth: authReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
