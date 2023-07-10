import LoginModal from './Element/LoginModal';
import RegisterModal from './Element/RegisterModal';
function Footer() {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <footer className='footer bg-dark text-light text-center d-flex justify-content-around mt-5' >
          <strong>@ Copyright 2023 All Rights & Reserved</strong>
          <strong>Developed By Sajid Ali </strong>
      </footer>
    </>
  );
}

export default Footer;
