
import './App.css';

import CounterApp2 from './ReduxTask/CounterApp/CounterApp2';
import AuthSlice from './ReduxTask/LoginStatus/AuthSlice';
import Login from './ReduxTask/LoginStatus/Login';
import Theme from './ReduxTask/ThemeDarkLight/Theme';
import MainTodoList from './ReduxTask/TodoList/MainTodoList';
import UserName from './ReduxTask/UserName/UserName';


function App() {
  return (
    <div className="App">
       {/* <ProductStock quantity={0}/> */}
   

      <MainTodoList/>
        
    </div>  
  );
}

export default App;
