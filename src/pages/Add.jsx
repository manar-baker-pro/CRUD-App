import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertPost } from "../store/postSlice";
import withGuard from "../util/withGuard";
import { useFormik } from "formik";
import { postSchema } from "../util/validationSchema";

import Loading from "../components/loading";

const AddPost = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.posts);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: postSchema,
    onSubmit: (values) => {
      const id = Math.floor(Math.random() * 500);
      dispatch(
        insertPost({ id, title: values.title, description: values.description })
      )
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="bg-white rounded-lg p-8 shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-3xl font-semibold mb-4">Add Post</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 text-left">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            className={`border w-full py-2 px-3 ${
              formik.errors.title ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {formik.errors.title && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 text-left"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            onChange={formik.handleChange}
            value={formik.values.description}
            className={`border w-full py-2  resize-none px-3 ${
              formik.errors.description ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {formik.errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>
        <Loading loading={loading} error={error}>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Submit
            </span>
          </button>
        </Loading>
      </div>
    </form>
  );
};

export default withGuard(AddPost);
