import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIncrease } from './CounterSlice';

const CounterApp2 = () => {


    const dispatch = useDispatch();

    const number = useSelector(state => state.counterapp.increase)

    const increaseCount = () =>{
        dispatch(setIncrease(number + 1 ))
    }

    const decreaseCOunt = () =>{
        dispatch(setIncrease(number-1))
    }
  return (
    <div>
            <h1>{number}</h1>
        <button className='btn btn-primary'onClick={increaseCount}>increase</button>
        <button className='btn btn-danger'onClick={decreaseCOunt}>decrease</button>
    </div>
  )
}

export default CounterApp2