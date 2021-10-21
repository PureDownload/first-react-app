import './App.css';
import Router from './router/index' //* 使用路由组件
//* 使用redux
import store from './store'//* 引入刚刚创建的store文件
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store} className="App">
      <Router />
    </Provider>
  );
}

export default App;
