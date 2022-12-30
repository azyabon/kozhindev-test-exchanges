import React from "react";
import { Provider } from "react-redux";
import Main from "../pages/Main/Main";
import "../../assets/styles/main.scss";
import { store } from "../../store";
import { Wrapper, Header } from "../ui";

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Wrapper>
        <Main />
      </Wrapper>
    </Provider>
  );
};
