import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CartPcopy from './component/CartParent';
import CartParent from './component/CartParent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        {/* <CartParents /> */}
        <CartParent />

      </Provider>


      {/* <CartPcopy /> */}


    </div>
  );
}

export default App;
