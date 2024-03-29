import React, { useEffect } from "react";
import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/loading";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Details() {
  const { loading, error, record } = usePostDetails();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({ type: "posts/cleanRecord" });
    };
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Loading loading={loading} error={error}>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Post Details</h2>
          <div className="mb-4">
            <p className="text-lg font-semibold">Title:</p>
            <p className="text-gray-700 capitalize">{record?.title}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold ">Description:</p>
            <p className="text-gray-700 capitalize">{record?.description}</p>
          </div>
          <div className="mt-6">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
            >
              Back to Posts
            </Link>
          </div>
        </div>
      </Loading>
    </div>
  );
}
