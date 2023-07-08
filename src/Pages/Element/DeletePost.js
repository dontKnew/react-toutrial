import React, { useState } from 'react';

function DeletePost({ id }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete the post?')) {
      setIsSubmitting(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => {
          console.log('Data Deleted:', data);
          setIsDeleted(true);
          setIsSubmitting(false);
        })
        .catch(error => {
          console.error(error);
          setIsDeleted(false);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      {isDeleted ? (
        <button className="btn btn-sm btn-danger disabled">Deleted</button>
      ) : (
        isSubmitting ? (
          <button className="btn btn-sm btn-danger">Deleting...</button>
        ) : (
          <button className="btn btn-sm btn-danger" onClick={handleDelete}>
            Delete
          </button>
        )
      )}
    </>
  );
}

export { DeletePost };
