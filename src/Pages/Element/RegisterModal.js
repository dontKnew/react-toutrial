import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function RegsiterModal() {
  const [isAdded, setIsAdded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addPostForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsAdded(true);
        setTimeout(() => {
          setIsAdded(false);
        }, 3000);
      } else {
        setIsAdded(true);
      }
    } catch (error) {
      console.error(error);
      setIsAdded(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Registration Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={addPostForm} className="needs-validation" noValidate>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faUser} /> Your Name</label>
                <input type="email" className="form-control" name="email"  required />
              </div>
              <div className="mb-3">
                <label className="form-label"> <FontAwesomeIcon icon={faEnvelope} /> Your Email</label>
                <input type="email" className="form-control" name="email"  required />
              </div>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faLock} /> Your Password</label>
                <input type="password" className="form-control" name="password"  required autoComplete='' />
              </div>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faLock} /> Confirm Password</label>
                <input type="password" className="form-control" name="cpassword"  required autoComplete='' />
              </div>
              <div className="mb-3">
                <span className='text-warning'> Are you already regsitered ? <span  data-bs-target='#loginModal' data-bs-toggle="modal" className='link-warning' ><strong>click here</strong></span></span>
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
                    <button className="btn btn-success" type="submit">
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
  );
}

export default RegsiterModal;
