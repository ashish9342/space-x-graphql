import React from "react";
import classNames from "classnames";
// import Moment from "react-moment";

export default function LaunchItem(props) {
  const {
    flight_number,
    mission_name,
    mission_id,

    land_success,
    launch_success,
    launch_year,
    links
  } = props.launch;

  return (
    <div className="col-md-3 equal">
      <div className="card card-body mb-3">
        <div >

          {links.mission_patch_small && (
            <div className="img-wrapper text-center">
              <img
                className="img-fluid"
                src={links.mission_patch_small}
                alt={mission_name}
                style={{ width: "150px" }}
              />
            </div>
          )}
          <div className="text-center"
          >
            <h4>
              <span
                className={classNames({
                  "text-success": launch_success,
                  "text-danger": !launch_success
                })}
              >
                {mission_name} #{flight_number}
              </span>
              <div className="desc text-left">
                <div><p>Mission id</p>
                  {mission_id.length > 0 ?
                    <ul>
                      {mission_id.map((mission, i) => (
                        <li key={i}>{mission}</li>
                      ))}
                    </ul> : `: null`}
                </div>
                <p>Launch Year: {launch_year}</p>
                <p>Successfull Launch: {JSON.stringify(launch_success)}</p>
                <p>Successfull Landing:  {JSON.stringify(land_success)}</p>
              </div>



            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
