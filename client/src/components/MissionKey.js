import React from "react";

export default function MissionKey() {
  return (
    <div className="my-3 d-flex">
      <div className="mr-3">
        <span className="px-3 mr-2 bg-success" /> Success
      </div>
      <div>
        <span className="px-3 mr-2 bg-danger" /> Fail
      </div>
    </div>
  );
}
