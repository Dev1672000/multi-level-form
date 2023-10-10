import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("Username is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    portfolio: Yup.string().url("Invalid URL"),
    github: Yup.string().url("Invalid URL"),
    website: Yup.string().url("Invalid URL"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
      portfolio: "",
      github: "",
      website: "",
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("userFormData", JSON.stringify(values));
      alert("Form submitted successfully!");
    },
  });

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500">{formik.errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500">{formik.errors.username}</p>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500">{formik.errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500">{formik.errors.address}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500">{formik.errors.country}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.state && formik.errors.state && (
                <p className="text-red-500">{formik.errors.state}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500">{formik.errors.city}</p>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-4">
              <label htmlFor="portfolio" className="block text-gray-700">
                Portfolio link
              </label>
              <input
                type="text"
                id="portfolio"
                name="portfolio"
                value={formik.values.portfolio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.portfolio && formik.errors.portfolio && (
                <p className="text-red-500">{formik.errors.portfolio}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="github" className="block text-gray-700">
                Github link
              </label>
              <input
                type="text"
                id="github"
                name="github"
                value={formik.values.github}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.github && formik.errors.github && (
                <p className="text-red-500">{formik.errors.github}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="website" className="block text-gray-700">
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formik.values.website}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input bg-slate-50 px-2 rounded-lg py-1 w-full"
              />
              {formik.touched.website && formik.errors.website && (
                <p className="text-red-500">{formik.errors.website}</p>
              )}
            </div>
          </>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
