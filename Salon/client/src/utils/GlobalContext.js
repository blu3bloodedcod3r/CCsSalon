import React, { createContext, useContext } from "react";
import { AppointmentPicker } from "react-appointment-picker";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {

  const [state, dispatch] = useProductReducer({
    AppointmentPicker
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };