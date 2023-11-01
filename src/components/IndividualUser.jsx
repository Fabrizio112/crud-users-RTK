import { useDispatch } from "react-redux";
import { ButtonAction, TableData } from "../assets/StyledComponents/Components";
import { useDeleteUsersMutation } from "../redux/store/apis/usuarios";
import { editForm } from "../redux/store/formSlice";

function IndividualUser({ user }) {
    const dispatch = useDispatch()

    const [deleteUser] = useDeleteUsersMutation()

    const handleDelete = (user) => {
        deleteUser(user.id)
    }
    const handleEdit = (user) => {
        dispatch(editForm(user))
    }

    return (
        <tbody>
            <tr key={user.id}>
                <TableData>{user.id}</TableData>
                <TableData>{user.name}</TableData>
                <TableData>{user.username}</TableData>
                <TableData>{user.email}</TableData>
                <TableData><ButtonAction onClick={() => handleEdit(user)}>Edit</ButtonAction><ButtonAction onClick={() => handleDelete(user)}>Delete</ButtonAction></TableData>
            </tr>
        </tbody>);
}

export default IndividualUser;