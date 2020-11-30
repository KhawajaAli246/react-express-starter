import React,{Fragment} from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Fragment>
        <Provider store={store}>
          <div>React</div>
        </Provider>
    </Fragment>
 );
}

export default App;
