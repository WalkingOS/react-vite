import { useState } from 'react'

export const CounterButton = () => {
  // Initialize a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0)

  console.log('fasdf')

  return (
    <>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -
      </button>
      <span>Count: {count}</span>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>

      {/** Reset button */}

      {/** prev button */}
    </>
  )
}

export const StringStateExample = () => {
  const [text, setText] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <>
      <label>
        String state example: &nbsp;
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
        />
      </label>
      <p>{text}</p>
    </>
  )
}

// useState with boolean
export const Switch = () => {
  // useState with boolean
  return (
    <>
      <button>{/** true/false ? Its bright outside : its night */}</button>
    </>
  )
}

// we can use multiple state in one component.
export const UserInfoForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // You can access the updated state values (firstName, lastName, email) here
    window.alert(`Submitted: ${firstName} ${lastName} (${email})`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
// But its not a good practice. We have to reduce the states

// lets make this better:
