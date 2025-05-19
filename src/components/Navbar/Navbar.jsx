import React, {useContext} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

// import arrow_icon from '../../assets/arrow.png'


const Navbar = () => {
const {setCurrency} = useContext(CoinContext)

const currencyHandler = (event) => {
  switch (event.target.value){
    case "USD":{
      setCurrency({name:"USD", symbol:"$"})
      break;
    }
    case "EUR":{
      setCurrency({name:"EUR", symbol:"€"})
      break;
    }
    case "INR":{
      setCurrency({name:"INR", symbol:"₹"})
      break;
    }
    default:{
      setCurrency({name:"USD", symbol:"$"})
      break;
    }
  }
}

  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR </option>
            </select>
            <button>Sign Up <img src="" alt="" /></button>
        </div>
      
    </div>
  )
}

export default Navbar
