import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './ThemeSlice';
import './theme.css'

const Theme = () => {

    const mode = useSelector((state) => state.themeApp.theme);  //state.storeReducerVariable.sliceInistialStateVarible
    const dispatch = useDispatch();

  
  const handleMode = () =>{
        dispatch(setTheme())
  }
    return (
    <div className={`theme ${mode}`}>

        <h1>{mode}</h1>

        <button className={`${mode === 'light' ? "btn btn-dark" : "btn btn-light"}`} onClick={handleMode}>{mode === 'light' ? "dark" :"light"}</button>
        {/* <button className=''>light</button> */}
    </div>
  )
}

export default Theme