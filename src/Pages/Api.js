import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import AddPost from './Element/AddPost';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div class="d-flex justify-content-between">
          <h3>Blog Table</h3> 
          <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Post</button>
        </div>
      <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Body </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
          {
          (data.length!==0) ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td className="d-flex justify-content-between g-2 align-items-center h-100">
                  <button className="btn btn-sm btn-warning">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center bg-dark bg-light ">
              <td colSpan={4}>Loading</td>
            </tr>
          )
        }
          </tbody>
        </table>
      </div>
      <AddPost />
      <Footer />
    </>
  );
}

export default Api;
