import { useState } from "react"
import { useGlobalState } from "../../hooks/useGlobalState"


export const TransactionForm = () => {

  const { addTransaction } = useGlobalState()
  const [ description, setDescription ] = useState()
  const [ amount, setAmount ] = useState( 0 )

  const onSubmit = (e) => {

    e.preventDefault()
    
    addTransaction( {
      id: window.crypto.randomUUID(),
      description, 
      amount: parseInt(amount)
    } )
  }


  return (
    <div>

      <form onSubmit={ onSubmit }>
        <input
          type="text"
          placeholder="Ingresa una descripción"
          onChange={ (e) => setDescription(e.target.value) }
          />

        <input
          type="number"
          placeholder="Ingresa un monto"
          onChange={ (e) => setAmount(e.target.value) }
        />

        <button>
          Enter
        </button>
      </form>

    </div>
  )
}
