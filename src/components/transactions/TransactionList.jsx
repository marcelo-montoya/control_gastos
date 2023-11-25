import { Button, ListGroup, ListGroupItem } from "react-bootstrap"
import { useGlobalState } from "../../hooks/useGlobalState"






export const TransactionList = () => {

    const { transactions, deleteTransaction } = useGlobalState()




  return (
    <div>
        <h3>Historial</h3>

        

        {
            // transactions.map( transaction => (

                <ListGroup>
                {transactions.map((transaction) => (
                  <ListGroup.Item key={transaction.id} className="d-flex justify-content-between align-items-center">
                    <span>{transaction.description}</span>
                    <span>${transaction.amount}</span>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteTransaction(transaction.id);
                      }}
                    >
                      Borrar
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>


            //     <Table striped>
            //     <thead>
            //       <tr>
            //         <th> Descripcion </th>
            //         <th> Monto </th>
            //         <th></th>
            //       </tr>
            //     </thead>
            //     <tbody >
            //       <tr key={ transaction.id }>
            //         <td> { transaction.description } </td>
            //         <td> $ { transaction.amount } </td>
            //         <td> <Button 
            //         variant="danger"
            //         onClick={ () => {
            //             deleteTransaction( transaction.id )
            //         } } >
            //             Borrar
            //         </Button> </td>
            //       </tr>
            //     </tbody>
            //   </Table>

                
                // <div key={ transaction.id } >
                //     <p> { transaction.description } </p>
                //     <span> $ { transaction.amount } </span>
                //     <Button 
                //     variant="danger"
                //     onClick={ () => {
                //         deleteTransaction( transaction.id )
                //     } } >
                //         Borrar
                //     </Button>
                // </div>
            // ) )
        }
    </div>
  )
}
