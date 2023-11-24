import { GlobalProvider } from "./context/GlobalState"

import { Balance, Chart, Header, IncomeExpenses } from "./components"
import { TransactionForm, TransactionList } from "./components/transactions"





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
