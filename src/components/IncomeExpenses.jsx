import { Table } from "react-bootstrap"
import { useGlobalState } from "../hooks/useGlobalState"


export const IncomeExpenses = () => {

    const { transactions } = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)

    const ingreso = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)

    const gasto = amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * 1

    return (


        <Table striped>
        <thead>
          <tr>
            <th>Ingresos</th>
            <th>Gastos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ingreso}</td>
          </tr>
          <tr>
            <td>{gasto}</td>
          </tr>
        </tbody>
      </Table>

        // <>
        //     <div>
        //         <h4>Ingresos</h4>
        //         <p> {ingreso} </p>
        //     </div>

        //     <div>
        //         <h4>Gastos</h4>
        //         <p> {gasto} </p>

        //     </div>
        // </>


    )

}


