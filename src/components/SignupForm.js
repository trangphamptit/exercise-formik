import React, { Component } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import "./SignupForm.css";

const SignupValidation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  sex: yup.string().required(),
  email: yup.string().required(),
  note: yup.string().required(),
  color: yup.string().required(),
  employ: yup.string().required()
});

const SignupForm = props => {
  return (
    <Form
      className="signupform "
      onSubmit={props.handleSubmit}
      onReset={props.handleReset}
    >
      <div className="container">
        <div className="field firstname">
          <div className="left">
            <label>First Name</label>
          </div>
          <div className="right">
            {" "}
            <Field
              type="text"
              name="firstname"
              placeholder=" First Name"
              value={props.values.firstname}
            />
          </div>
        </div>
        <div className="error">
          <ErrorMessage name="firstname" />
        </div>
        <div className="field lastname">
          <div className="left">
            {" "}
            <label>Last Name</label>
          </div>
          <div className="right">
            {" "}
            <Field type="text" name="lastname" placeholder=" Last Name" />
          </div>
        </div>
        <div className="error">
          <ErrorMessage name="lastname" />
        </div>
        <div className="field email">
          <div className="left">
            {" "}
            <label>Email</label>
          </div>
          <div className="right">
            {" "}
            <Field type="email" name="email" placeholder=" Email" />
          </div>
        </div>
        <div className="error">
          <ErrorMessage name="email" />
        </div>

        <div className="field sex">
          <div className="left">
            {" "}
            <label>Sex</label>
          </div>

          <div className="right choose">
            <div className="option">
              <Field type="radio" name="sex" value="male" id="male" />
              <label htmlFor="male"> Male</label>
            </div>
            <div className="option">
              <Field type="radio" name="sex" value="female" id="female" />
              <label htmlFor="female"> Female</label>
            </div>
          </div>
        </div>
        <div className="error">
          <ErrorMessage name="sex" />
        </div>
        <div className="field color">
          <div className="left">
            {" "}
            <label>Favorite Color</label>
          </div>
          <div className="right">
            {" "}
            <select
              name="color"
              value={props.values.color}
              onChange={props.handleChange}
            >
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="yellow">Yelow</option>
              <option value="white">White</option>
            </select>
          </div>
        </div>
        <div className="error">
          <ErrorMessage name="color" />
        </div>
        <div className="field employ">
          <div className="left">
            <label>Employed</label>
          </div>
          <div className="right">
            {" "}
            <Field type="checkbox" name="employ" />
          </div>
        </div>
        <div className="error">
          <ErrorMessage name="employ" />
        </div>
        <div className="field note">
          <div className="left">
            <label>Notes</label>
          </div>
          <div className="right">
            {" "}
            <textarea
              rows="2"
              name="note"
              value={props.values.note}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="error">
          <ErrorMessage name="note" />
        </div>
        <div className="field ">
          <div className="left" />
          <div className="right">
            <button type="submit" className="submit-btn">
              <i class="far fa-paper-plane" /> Submit
            </button>
            <button type="reset" className="clear-btn">
              Clear Values
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

class SignupContainer extends Component {
  onSubmit = (values, actions) => {
    console.log(values);
  };

  render() {
    return (
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          sex: "",
          email: "",
          note: "",
          color: "",
          employ: ""
        }}
        validationSchema={SignupValidation}
        onSubmit={this.onSubmit}
        onReset={this.handleReset}
        render={props => <SignupForm {...props} />}
      />
    );
  }
}

export default SignupContainer;
