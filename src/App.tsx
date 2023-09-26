import './App.scss'
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
    <div>
      <Button />

      <button className="">blabalba</button>

      <ButtonChild>
        <div>Div Label</div>
      </ButtonChild>

      <ButtonChild className="foo">TEST</ButtonChild>
    </div>
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
