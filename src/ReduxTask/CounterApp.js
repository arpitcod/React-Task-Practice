import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increase,decrease,setIncrease,setDecrease} from './BasicSetup';
const CounterApp = () => {

  const count = useSelector(state => state.counter.increase)
    // const [count,setCount] = useState(0)
    const disPatch = useDispatch();
    

    // const num = (state => state.count.value);

    // const increase = (state) => state.counter.increase;

    const handleINcrease = () =>{
        
        // // disPatch(increase(setCount(count + 1)))
        // disPatch(num(setCount(count + 1)))
        // // disPatch(setCount(count + 1))
        // disPatch(increase())
        // disPatch(setIncrease(setCount(count + 1)))
        disPatch(setIncrease(count+1))
    }

    const handleDecrease = () =>{
          
      disPatch(setIncrease(count - 1))
            // disPatch(decrease())
    }

  return (
    <div>

        <h1>{count}</h1>
        <button className='btn btn-primary' onClick={handleINcrease}>increase</button>
        <button className='btn btn-danger' onClick={handleDecrease}>decrease</button>
    </div>
  )
}

export default CounterApp