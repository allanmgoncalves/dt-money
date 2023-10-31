import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Website Development</td>
              <td>
                <PriceHighlight variant="income">CAD 3,300.00</PriceHighlight>
              </td>
              <td>Sell</td>
              <td>06/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Apartment Rent</td>
              <td>
                <PriceHighlight variant="outcome">CAD -2,000.00</PriceHighlight>
              </td>
              <td>House</td>
              <td>10/04/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
