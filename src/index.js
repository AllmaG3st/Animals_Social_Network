import reactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

reactDom.render(
   <Provider store={store} >
      <App />
   </Provider>
   ,
   document.getElementById('root')
);