import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postSlice";
import { useParams } from "react-router-dom";

export default function usePostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, record } = useSelector((state) => state.posts);
  console.log(typeof +id);
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);
  return { loading, error, record };
}
