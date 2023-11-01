import { useDispatch, useSelector } from "react-redux";
import { resetForm, changeForm } from "../redux/store/formSlice";
import { useAddUserMutation, useUpdateUserMutation } from "../redux/store/apis/usuarios";

function FormCrud() {
    const form = useSelector(state => state.form)
    const [updateUser] = useUpdateUserMutation()
    const [addUser] = useAddUserMutation()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(changeForm({ element: e.target.name, value: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target.parentNode
        let regExpForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (form.name.value && form.email.value.match(regExpForEmail) && form.username.value) {
            let idRandom = Date.now()
            let newUser = {
                id: idRandom,
                name: form.name.value,
                username: form.username.value,
                email: form.email.value
            }
            dispatch(resetForm())
            addUser(newUser)
        }
    }
    const handleEdit = (e) => {
        e.preventDefault()
        const actualForm = e.target.parentNode
        let regExpForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (actualForm.name.value && actualForm.email.value.match(regExpForEmail) && actualForm.username.value) {
            const user = {
                id: form.id,
                name: actualForm.name.value,
                username: actualForm.username.value,
                email: actualForm.email.value
            }
            updateUser(user)
            dispatch(resetForm())
        }
    }
    return (
        <form>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />

            {form.id ? <button type="submit" onClick={handleEdit}>Edit</button> : <button type="submit" onClick={handleSubmit}>Add</button>}
        </form>);
}

export default FormCrud;