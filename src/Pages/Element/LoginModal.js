import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons'

function LoginModal() {
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

      const response = await fetch('https://api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
          // if user logged success msg then save the token in localstorage/cokieee & redirect to dasbhaord
          // api token must be save in database & every logout token will delete and every login token will create new save to database
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
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Welcome Back :)</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <h3 className='text-center mt-4'><FontAwesomeIcon icon={faUser} /> User Login</h3>
          <form onSubmit={addPostForm} className="needs-validation" noValidate>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label"> <FontAwesomeIcon icon={faEnvelope} />  Email</label>
                <input type="email" className="form-control" name="email"  required />
              </div>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faLock} />  Password</label>
                <input type="password" className="form-control" name="password"  autoComplete='' required />
              </div>
              <div className="mb-3">
                <span className='text-warning'> Are you forget the password ? <span  className='link-warning' ><strong>click here</strong></span></span>
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

export default LoginModal;
