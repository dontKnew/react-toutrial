import React, { useState } from 'react';

function AddPost() {
  const [isAdded, setIsAdded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addPostForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let [name, value] of formData.entries()) {
      data[name] = value;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Data Added will not show", data);
        setIsAdded(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setIsAdded(false);
        }, 3000);
      })
      .catch(error => {
        console.error(error);
        setIsAdded(true);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={addPostForm}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Post Title</label>
                  <input type="text" className="form-control" name="title" aria-describedby="emailHelp" required/>
                  <div className="invalid-feedback">
                    Please enter a post title.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Post Description</label>
                  <textarea className="form-control" name="body" aria-describedby="emailHelp" required></textarea>
                  <div className="invalid-feedback">
                    Please enter a post description.
                  </div>
                </div>
                {isAdded ? (
                  <div className="alert alert-success py-2 text-center" role="alert">
                    Post successfully added!
                  </div>
                ) : (
                  <div className="text-center">
                    {isSubmitting ? (
                      <button className="btn btn-primary" type="button" disabled>
                        Please wait...
                      </button>
                    ) : (
                      <button className="btn btn-outline-primary" type="submit">
                        Submit
                      </button>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPost;
