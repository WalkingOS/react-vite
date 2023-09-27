// we can conditionally render elements for example via:

// multiple returns
// foo && <p>boo</p>
// foo ? <p>boo</p> : <></>

interface IItems {
  eggs: number
  fruit: string[]
  ketchup?: boolean
  drinks: string[]
}

export const Refrigerator = (items: IItems) => {
  const { eggs, fruit, ketchup, drinks } = items

  if (!eggs || !fruit.length || !drinks.length) return <>no food</>

  return (
    <>
      <h2>
        <b>Refrigerator</b>
      </h2>

      <div>
        <h3>Food:</h3>
        <ul>
          {eggs > 0 ? <li>We have {eggs} eggs</li> : <li>We need some eggs</li>}

          <li>
            {fruit.length ? (
              <>
                <h4>Fruits:</h4>
                <ul>
                  {fruit.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>We need some fruits</>
            )}
          </li>

          {ketchup !== undefined && (
            <li>
              <h4>Sauce:</h4>
              <p>{ketchup ? <>Ketchup</> : <>no sauce</>}</p>
            </li>
          )}
        </ul>

        {!!drinks.length && (
          <>
            <h3>Drink:</h3>
            <ul>
              {drinks.map((drink) => (
                <li key={drink}>{drink}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  )
}
