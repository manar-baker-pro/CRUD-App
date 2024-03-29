import React, { cloneElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function DeleteConfirmationModal({
  element,
  deleteHandler,
  id,
}) {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteHandler(id);
    closeModal();
  };

  return (
    <>
      {cloneElement(element, {
        onClick: (e) => {
          e.stopPropagation();
          openModal();
        },
      })}

      {showModal && (
        <div
          role="dialog"
          aria-labelledby="deleteModalLabel"
          aria-describedby="deleteModalDescription"
          className="fixed inset-0 z-50 flex items-center bg-gray-900 bg-opacity-25 justify-center overflow-y-auto outline-none focus:outline-none "
        >
          <div className="relative w-auto max-w-lg p-4 mx-auto my-6">
            <div className="relative p-6 bg-white  shadow-lg rounded-lg text-gray-900 ">
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-400  transition-all ease-linear duration-300  hover:text-gray-900 "
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faTimes} />
                <span className="sr-only">Close modal</span>
              </button>
              <h3
                id="deleteModalLabel"
                className="text-xl font-semibold mb-4 text-gray-900 "
              >
                Delete Confirmation
              </h3>
              <p id="deleteModalDescription" className="text-gray-600  mb-4">
                Are you sure you want to delete this item?
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-600 hover:text-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-primary-300 tranition-all ease-linear duration-300 border"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-lg tranition-all ease-linear duration-300"
                  onClick={handleDelete}
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
