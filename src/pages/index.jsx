import React, { useCallback } from "react";
import PostedList from "../components/postList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../store/postSlice";
import Loading from "../components/loading";
import { deletePost } from "../store/postSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Index() {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecord = useCallback((id) => dispatch(deletePost(id)), [
    dispatch,
  ]);

  return (
    <>
      <Loading loading={loading} error={error}>
        <PostedList
          data={records}
          deleteRecord={deleteRecord}
          isLoggedIn={isLoggedIn}
        />
      </Loading>
      <NavLink to="/post/add">
        <button className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-md shadow-md hover:shadow-lg focus:outline-none flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          <span className="text-md">Add Post</span>
        </button>{" "}
      </NavLink>
    </>
  );
}
