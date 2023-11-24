import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../hooks/useGlobalState";
import { IncomeExpenses } from "./IncomeExpenses";




export const Chart = () => {

    const { transactions } = useGlobalState()

    // const total = transactions.reduce(( acc, transaction ) => ( acc += transaction.amount ), 0)

    const totalIngreso = transactions.filter( transaction => transaction.amount > 0 ).reduce(( acc, transaction ) => ( acc += transaction.amount ), 0)
    
    const totalGasto = transactions.filter( transaction => transaction.amount < 0 ).reduce(( acc, transaction ) => ( acc += transaction.amount ), 0) * - 1

    console.log(totalGasto)
    
    // const porcentajeGastos = Math.round((totalGasto / totalIngreso) * 100)

    // console.log( porcentajeGastos )


    return (
        <VictoryPie

        colorScale={["tomato", "navy" ]}
            data={[
                { x: "Gastos", y: totalGasto },
                { x: "Ingresos", y: totalIngreso }
            ]}
            animate = {{
                duration: 2000,
            }}
            labelComponent={
                < VictoryLabel
                    angle={45}
                    style={{

                        fill:"white",
                        fontSize: 5
                    }}
                />
            }
            height={150}
            
        />
    )
}
