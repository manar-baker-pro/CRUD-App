import React, { useEffect } from "react";
import usePostDetails from "../hooks/use-post-details";
import { useDispatch } from "react-redux";
import { editPost } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
import withGuard from "../util/withGuard";
import { useFormik } from "formik";
import { postSchema } from "../util/validationSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/loading";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, record } = usePostDetails();

  useEffect(() => {
    return () => {
      dispatch({ type: "posts/cleanRecord" });
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: record ? record?.title : "",
      description: record ? record?.description : "",
    },
    enableReinitialize: true,
    validationSchema: postSchema,
    onSubmit: (values) => {
      dispatch(
        editPost({
          id: record.id,
          title: values.title,
          description: values.description,
        })
      )
        .unwrap()
        .then(() => navigate("/"));
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-2xl font-semibold mb-4">Edit Post</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              className={`border w-full py-2 px-3 rounded ${
                formik.errors.title
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {formik.errors.title && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              onChange={formik.handleChange}
              value={formik.values.description}
              className={`border w-full py-2 px-3 resize-none rounded ${
                formik.errors.description
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
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
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Submit
            </button>
          </Loading>
        </form>
      </div>
    </div>
  );
};

export default withGuard(EditPost);
