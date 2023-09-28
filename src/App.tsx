import './App.scss'
import { Refrigerator } from './Examples/ConditionalRendering'
import {
  FetchExample,
  MousePosition,
  MyFirstUseEffect,
} from './Examples/Hooks/useHookExample'
import UserInfoForm, {
  AddComponent,
  CounterButton,
  StringStateExample,
  ToggleButton,
} from './Examples/Hooks/useStateExample'
import Button, { ButtonChild } from './components/Button'

const Foo = () => {
  return <div>Test</div>
}

const IterateApp = (): JSX.Element /** HTMLElement after compiling */ => {
  return (
    <div>
      {mocks.map((mock: string) => {
        return <Foo key={mock}></Foo>
      })}
    </div>
  )
}

const App = () => {
  return (
    <center>
      <hr></hr>
      {/*       <Refrigerator
        drinks={['water', 'water']}
        eggs={5}
        fruit={['apple', 'banana']}
        ketchup={true}
      /> */}
      <FetchExample />
      <hr></hr>
    </center>
  )
}

export default App

const mocks = ['Hello', 'World', 'Emil', 'Osman']

/**
 * 
 * 
 * 
const App = () => {
  return "Hello World"
}

document.querySelector("#root").innerHTML += App();

 */
