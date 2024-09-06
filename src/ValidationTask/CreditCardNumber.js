// . **Credit Card Number**: Validate a credit
//  card number based on length and format.
import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa';

const CreditCardNumber = () => {
    const [cardNum ,setCardNum] = useState("");
    const [isValid,setIsvalid] = useState("");

    const cardNumPattern = /^\d{16}$/;
    const handleOnChange = (e) =>{
        const input = e.target.value.replace(/\s/g, '');
        setCardNum(input);

        if (cardNumPattern.test(input)) {
            setIsvalid(true);
        } else {
            
            setIsvalid(false);
            
        }
    }
  return (
    <div>
        <label>enter credit card number</label>
        <input type="text" 
            placeholder='enter 16-dight card number'
            onChange={handleOnChange}
            value={cardNum}
            maxLength={19}
        />
       {isValid === true && <p className='text-success'>card number is valid</p>}
       {isValid === false && <p className='text-danger'>card number is not valid</p>}
    </div>
  )
}

export default CreditCardNumber