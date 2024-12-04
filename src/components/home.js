import React from 'react';

const Home = () => {
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h2 className="mb-5">Simple CRUD with Redux</h2>
      <button className="btn btn-primary my-3 p-3">Create +</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Amit</td>
            <td>amit@gmail.com</td>
            <td>
              <button className="btn btn-sm btn-primary">Edit</button>
              <button className="btn btn-sm btn-danger ms-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
