import "./style.css";
import { Header } from "./Header";
import { Form } from "./Form";
import { TotalMoney } from "./TotalMoney";
import { List } from "./List";

export function HomePage({ SetEnterFinancePage, listTransactions, addTransaction, removeTransaction }) {

  const exitPage = () => SetEnterFinancePage(false);

  return (
    <div className="finance_page">
      <Header exitPage={exitPage} />

      <main className="container">
        <section className="main_data_container">
          <Form addTransaction={addTransaction} />
          {listTransactions.length > 0 ? <TotalMoney listTransactions={listTransactions} /> : null}
        </section>
        <section className="main_cards_container">
          <List listTransactions={listTransactions} removeTransaction={removeTransaction} />
        </section>
      </main>
    </div>
  );
}
