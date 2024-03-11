import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
// import axios from "axios";

const initialValues = {
  yname: "",
  cname: "",
  email: "",
  country: "",
  mobnum: "",
  inquiry: "",
};

const onSubmit = async (data, { setSubmitting, resetForm }) => {
  let details = {
    yname: data.yname,
    cname: data.cname,
    email: data.email,
    country: data.country,
    mobnum: data.mobnum,
    inquiry: data.inquiry,
  };
  console.log(details);

  // const url = "http://localhost:4800/api/mail?from=360";
  // const url = "http://144.91.79.237:8909/api/mail?from=360"

  // const res = await new axios.post(url, details);
  // console.log("res", res);
  // if (res.status === 200) {
  //   alert("mail sent successfully");
  // } else {
  //   alert("something went wrong...try again");
  // }
  // resetForm(false);
  // setSubmitting(false);
};

const validate = (values) => {
  let errors = {};

  if (!values.yname) {
    errors.yname = "Required";
  } else if (!/^[a-zA-Z]+ [a-zA-Z]+ |[a-zA-Z]+$/i.test(values.yname)) {
    errors.yname = "only characters are allowed";
  }
  if (!values.cname) {
    errors.cname = "Required";
  } else if (!/^[a-zA-Z]+ [a-zA-Z]+ |[a-zA-Z]+$/i.test(values.cname)) {
    errors.cname = "only characters are allowed";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.mobnum) {
    errors.mobnum = "Required";
  } else if (!/^([0-9]{1,5})?([7-9][0-9]{9})$/i.test(values.mobnum)) {
    errors.mobnum = "please enter valid number";
  }
  if (!values.projectDesc) {
    errors.projectDesc = "Required";
  }
  return errors;
};

function Contact() {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="container my-4" id="contactus">
      <nav aria-label="breadcrumb  bg-secondary text-white">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
      <form className="container needs-validation" novalidate="">
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="your-name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="yname"
              name="yname"
              maxLength={25}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.yname}
              placeholder="Write Your Name here"
              required=""
            />
            {/* <div className="invalid-feedback">
              {formik.touched.yname && formik.errors.yname
                ? formik.errors.yname
                : ""}
            </div> */}
          </div>

          <div className="col-sm-6">
            <label for="company-name" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="cname"
              name="cname"
              maxLength={25}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cname}
              required=""
            />
            {/* <div className="invalid-feedback">
              {formik.touched.cname && formik.errors.cname
                ? formik.errors.cname
                : ""}
            </div> */}
          </div>

          <div className="col-sm-6">
            <label for="username" className="form-label">
              Country
            </label>
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              searchable
              searchPlaceholder="Search countries"
              selectButtonClassName="menu-flags-button"
              id="flags-select"
            />
          </div>

          <div className="col-sm-6">
            <label for="mobile" className="form-label">
              Mobile Number
            </label>
            <div className="input-group has-validation">
              {/* <span className="input-group-text">@</span> */}
              <PhoneInput
                defaultCountry="IN"
                type="tel"
                className="form-control d-flex"
                required=""
                // onChange={setValue}
                id="mobnum"
                name="mobnum"
                placeholder="Enter your mobile number here"
                maxLength={12}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobnum}
              />
              {/* <div className="invalid-feedback">reqiuired mobile</div> */}
              {/* {formik.touched.mobnum && formik.errors.mobnum ? (
                <div className="errors">{formik.errors.mobnum}</div>
              ) : null} */}
            </div>
          </div>

          <div className="col-12">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              maxLength={30}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {/* <div className="invalid-feedback">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </div> */}
          </div>

          <div className="col-12">
            <label for="address" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              required="field required"
              rows="6"
              id="inquiry"
              placeholder="Enter your message here"
              name="inquiry"
              maxLength={500}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.inquiry}
            />
            {/* <div className="invalid-feedback">
              {formik.touched.inquiry && formik.errors.inquiry
                ? formik.errors.inquiry
                : ""}
            </div> */}
          </div>

          <hr className="my-4"></hr>

          <button
            className="w-100 btn btn-secondary btn-lg"
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
