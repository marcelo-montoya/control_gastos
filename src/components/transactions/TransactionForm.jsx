import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { useGlobalState } from "../../hooks/useGlobalState"


export const TransactionForm = () => {

  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState( )


  const onInputChangeDescription = ({ target }) => {

    setDescription(target.value)

  }

  const onInputChangeAmount = ({ target }) => {

    setAmount(target.value)

  }

  const onSubmit = (e) => {

    e.preventDefault()

    if (amount.length === 0 || amount === 0) return
    if (description.trim().length <= 1) return


    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: parseInt(amount)

    })

    setDescription('')
    setAmount('')
  }


  return (
    <div>

<Form onSubmit={onSubmit}>
      <Form.Group controlId="formDescription">
        <Form.Control
          type="text"
          placeholder="Ingresa una descripción"
          onChange={onInputChangeDescription}
        />
      </Form.Group>

      <Form.Group controlId="formAmount">
        <Form.Control
          type="number"
          placeholder="Ingresa un monto"
          onChange={onInputChangeAmount}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enter
      </Button>
    </Form>


      {/* <form onSubmit={onSubmit}>
        
        <input
          type="text"
          placeholder="Ingresa una descripción"
          onChange={onInputChangeDescription}
        />

        <input
          type="number"
          placeholder="Ingresa un monto"
          onChange={onInputChangeAmount}
        />

        <button>
          Enter
        </button>
        
      </form> */}

    </div>
  )
}
