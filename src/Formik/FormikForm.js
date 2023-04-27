import React from 'react';
import { useFormik } from 'formik';
import CommonModal from '../Common/CommonModal';


const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
        },
    });

    const body = <form onSubmit={formik.handleSubmit}>
        <div className="form-row row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="firstName">First Name</label>
            <div className="col-sm-10">
                <input
                    id="firstName"
                    className="form-control"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </div>
        </div>
        <div className="form-row row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="lastName">Last Name</label>
            <div className="col-sm-10">
                <input
                    id="lastName"
                    className="form-control"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
            </div>
        </div>
        <div className="form-row row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="email">Email Address</label>
            <div className="col-sm-10">
                <input
                    id="email"
                    className="form-control"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>;
    return (
        <CommonModal title="Add User" content={body} />
    );
};

export default FormikForm;