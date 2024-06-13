import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAUser, fetchAllUsers } from "../redux/action/action";

const TableUsers = () => {
  // const [listUser, setListUser] = useState([]);

  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    // fetchUsers();
    dispatch(fetchAllUsers());
  }, []);

  // const fetchUsers = async () => {
  //   let res = await axios.get("http://localhost:8080/users/all");
  //   console.log(111, res.data);
  //   if (res && res.data) {
  //     setListUser(res.data);
  //   }
  // };

  const handleDeleteUser = (id) => {
    dispatch(deleteAUser(id))
  };

  return (
    <Container>
      <hr />
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isError === true ? (
            <div>Something wrong, please try again...</div>
          ) : (
            <>
              {isLoading === true ? (
                <>Loading data ...</>
              ) : (
                <>
                  {listUser &&
                    listUser.length > 0 &&
                    listUser.map((item, index) => {
                      return (
                        <tr key={`users-${index}`}>
                          <td>{index + 1}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>
                            <button
                              onClick={() => handleDeleteUser(item.id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </>
              )}
            </>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUsers;
