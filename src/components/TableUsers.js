import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const TableUsers = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    let res = await axios.get("http://localhost:8080/users/all");
    console.log(111, res.data);
    if (res && res.data) {
      setListUser(res.data);
    }
  };

  const handleDeleteUser = () => {

  }

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
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(item.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUsers;
