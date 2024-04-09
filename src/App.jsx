import { useState } from 'react'
import './App.css'

function App() {
  const [inputs, setinputs] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    emailId: "",
    age: "",
    password: "",
  })
  const change = (e) => {
    const { name, value } = e.target
    setinputs({ ...inputs, [name]: value })
  }

  const validateForm = () => {
    if (!inputs.firstName) {
      alert("Please fill firstName")
      return
    }
    else if (!inputs.lastName) {
      alert("Please fill lastName")
      return
    }
    else if (!inputs.emailId) {
      alert("Please fill EmailID")
      return
    }
    else if (inputs.password.length < 8) {
      alert("Password length should be greater then 8")
      return
    }

    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < inputs.password.length; i++) {
      const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '_', '=', '[', '{', ']', '}', ':', ';', '<', '>']
      if (specialChars.includes(inputs.password[i])) {
        countSpecialCharacters++
      }
      else if (!isNaN(inputs.password[i] * 1)) {
        countDigit++
      }
      else {
        if (inputs.password[i] == inputs.password[i].toUpperCase()) {
          countUpperCase++
        }
        if (inputs.password[i] == inputs.password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }
    if (countLowerCase === 0) {
      alert("Invalid Form, 0 low Case Character in password")
      return
    }

    if (countUpperCase === 0) {
      alert("Invalid Form, 0 upper Case Character in password")
      return
    }

    if (countSpecialCharacters === 0) {
      alert("Invalid Form, 0 Special Character in password")
      return
    }

    if (countDigit === 0) {
      alert("Invalid Form, 0 Digit in password")
      return
    }
    alert("Form is valid")
  }

  return (
    <>
      <div className="main">
        <form>
          <input placeholder="First Name" onChange={change} name='firstName' />
          <input placeholder="Last Name" onChange={change} name='lastName' />
          <input placeholder="Mobile Number" onChange={change} name='mobile' />
          <input placeholder="Age" onChange={change} name='age' />
          <input placeholder="Email" onChange={change} name='emailId' />
          <input placeholder="Password" onChange={change} name='password' />

          <button type="submit" onClick={() => { validateForm() }}>Submit</button>
        </form>
      </div>

    </>
  )
}

export default App
