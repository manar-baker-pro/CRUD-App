import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "./deleteConfirmModal";
export default function PostedListItem({ data, deleteRecord, isLoggedIn }) {
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    deleteRecord(id);
  };
  const handleGetDetails = (id) => {
    navigate(`post/${id}`);
  };

  const records = data.map((el, idx) => (
    <tr
      key={el.id}
      className="even:bg-white-f8f9fb odd:bg-white cursor-pointer hover:bg-slate-300  transition-all duration-500  ease-in-out "
    >
      <td className="px-4 py-2">{`#${++idx}`}</td>
      <td
        className="px-4 py-2 capitalize"
        onClick={() => handleGetDetails(el.id)}
      >
        {el.title}
      </td>
      <td className="px-4 py-2">
        <div className="flex ">
          <button
            className="bg-green-500  hover:bg-green-700 transition-all ease-out duration-600 text-white m-2 px-2 py-1 rounded focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`post/${el.id}/edit`);
            }}
          >
            Edit
          </button>

          <DeleteConfirmationModal
            id={el.id}
            element={
              <button
                className={`bg-red-500  text-white px-2 py-1 m-2  rounded focus:outline-none ${
                  !isLoggedIn
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-red-700 transition-all ease-out duration-1000"
                }`}
                disabled={!isLoggedIn}
              >
                Delete
              </button>
            }
            deleteHandler={deleteHandler}
          />
        </div>
      </td>
    </tr>
  ));

  return <>{records}</>;
}
