import { useGlobalState } from "../hooks/useGlobalState"




export const IncomeExpenses = () => {

    const { transactions } = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)

    const ingreso = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)

    const gasto = amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * 1

    return (

        <>
            <div>
                <h4>Ingresos</h4>
                <p> {ingreso} </p>
            </div>

            <div>
                <h4>Gastos</h4>
                <p> {gasto} </p>

            </div>
        </>


    )

}
