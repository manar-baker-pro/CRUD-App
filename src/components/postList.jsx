import React from "react";
import PostListItem from "./PostListItem";

function PostedList({ data, deleteRecord, isLoggedIn }) {
  return (
    <div className="overflow-x-auto">
      {data.length === 0 ? (
        <div colSpan="3" className="text-center py-4">
          No data to display.
        </div>
      ) : (
        <table className="min-w-full bg-white border font-roboto tracking-wider ">
          <thead className="">
            <tr className=" bg-purple-blue  text-gray-50">
              <th className=" border p-3"> # </th>
              <th className="border p-3" style={{ width: "70%" }}>
                Title
              </th>
              <th className="border p-3" style={{ width: "10%" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <PostListItem
              data={data}
              deleteRecord={deleteRecord}
              isLoggedIn={isLoggedIn}
            />
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PostedList;
