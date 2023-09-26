// simple Button with a label prop
const Button = ({ label = 'labelll' }: { label?: string }) => {
  return <button>{label}</button>
}

// equal to:
const button = (label: string) => {
  return <button>{label}</button>
}
// then you have to consume like this -> {button("button")}

interface IButtonProp {
  children: JSX.Element | string
  className?: string
}

// button component with a child
export const ButtonChild = (props: IButtonProp) => {
  const { children, className } = props
  return <button className={'bg-red ' + (className || '')}>{children}</button>
}

export default Button
