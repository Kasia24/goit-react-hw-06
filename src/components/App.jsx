import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../components/redux/store";
import ContactForm from "../components/ContactForm.jsx";
import SearchBox from "../components/SearchBox.jsx";
import ContactList from "../components/ContactList.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
