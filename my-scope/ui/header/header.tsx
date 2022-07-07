import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import styles from './header.module.scss';
import Icon from '@bit/littlebox.atd.icons';
import {FaUser} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {GiWhiteBook} from "react-icons/gi";
import {AiFillHome} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"




export function Header({setShow, size }) {
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const initialValues: any = { email: '', password: '' };
  const [formValues, setFormValues]: any = useState(initialValues);
  const [formErrors, setFormErrors]: any = useState({});
  const [submit, isSubmit]: any = useState('');
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values: any) => {
    const errors: any = {};
    
    const regex = /[A-Za-z][6]@.[a-z][3]./i;
    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (regex.test(values.email)) {
      errors.email = 'this is not valid email format';
    }

    if (!values.password) {
      errors.password = 'Password is Required';
    } else if (values.password.length < 4 || values.password.length > 10) {
      errors.password =
        'password must be greater than 4 characters and less than 10 characters';
    }
    if (values.email === 'test@gmail.com' && values.password === 'test123') {
      isSubmit(true);
      alert('LoggedIn');
    }
    return errors;
  }
  return (

<>

<nav>
              <div className="logo"><GiWhiteBook></GiWhiteBook>BookStore</div>
              <input type="checkbox" id="click"></input>
              <label htmlFor="click" className="menu-btn">
              
                <GiHamburgerMenu  className="menuicon" color="skyblue"></GiHamburgerMenu>
              </label>
              <ul>
                <li><a  href="#" ><AiFillHome color="skyblue" size={30} onClick={() => setShow(true)}></AiFillHome></a></li>&nbsp;&nbsp;
                <li><a href="#"><FaUser color="skyblue" size={30}onClick={handleShow}></FaUser></a></li>&nbsp;&nbsp;
                <li><a href="#"><FaShoppingCart color="skyblue"size={30}  onClick={() => setShow(false)}></FaShoppingCart><span className='cartui'>{size}</span></a></li>
                
              </ul>
            </nav>

            <div>
        <Modal
          show={modal}
          onHide={handleClose}
          style={{ textAlign: 'right', marginLeft: '360px' }}
        >
          <Modal.Body>
            <div className={'container-fluid ' + styles['main']}>
              <div
                className={
                  'row justify-content-center align-items-center mx-auto shadow ' +
                  styles['main_div']
                }
              >
                <div className="col-12 col-md-5 col-lg-5 mx-auto px-1">
                  <form
                    className={
                      'justify-content-center align-items-center mx-auto ' +
                      styles['loginform']
                    }
                    onSubmit={submitHandler}
                  >
                    <h2 className={'text-start ' + styles['title']}>Login</h2>
                    <div className="mb-3 pt-1">
                      <input
                        type="email"
                        className="form-control input-box p-2"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      <p className={'text-danger text-start ' + styles['p']}>
                        {formErrors.email}
                      </p>
                    </div>
                    <div className="mb-3 pt-1">
                      <input
                        type="password"
                        className="form-control input-box p-2"
                        id="exampleInputPassword1"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                      />
                      <p className={'text-danger text-start ' + styles['p']}>
                        {formErrors.password}
                      </p>
                    </div>

                    <button type="submit" className={"btn w-100 "+styles['LoginBtn']} id="LoginBtn">
                      Login
                    </button>

                    <div className="col-lg-12 col-md-12 text-start">
                      Don't have an account{' '}
                      <a href="/register" className="text-decoration-none">
                        Register Now
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div> 


</>
  );
}

