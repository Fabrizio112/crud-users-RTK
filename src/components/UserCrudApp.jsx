import TableCrud from "./TableCrud";
import "../assets/css/styles.css";
import FormCrud from "./FormCrud";

function UserCrudApp() {
    return (
        <>
            <h1>User Crud App</h1>
            <section className="crud-app">
                <FormCrud />
                <TableCrud />
            </section>
        </>);
}

export default UserCrudApp;