import { Balance } from "./components/Balance"
import { Chart } from "./components/Chart"
import { Header } from "./components/Header"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionForm } from "./components/transactions/TransactionForm"
import { TransactionList } from "./components/transactions/TransactionList"
import { GlobalProvider } from "./context/GlobalState"




function App() {


  return (
    <GlobalProvider>
      < Header />
      < IncomeExpenses />
      < Balance />
      < TransactionForm />
      < TransactionList />
      < Chart />

    </GlobalProvider>
  )
}

export default App
