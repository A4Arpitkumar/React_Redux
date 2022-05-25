import logo from './logo.svg';
import './App.css';
import {increseNum,decreseNum} from './Actions';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const val = useSelector((state) =>state.upDown)
  return (
    <div className="App">

      {val}
      <br></br>
      <br></br>

      <input type="button" value="Increment" onClick={() => {dispatch(increseNum())}}/>
      <input type="button" value="Decrement" onClick={() => {dispatch(decreseNum())}}/>
                 
    </div>
  );
}

export default App;
