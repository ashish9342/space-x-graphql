import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";
// import Moment from "react-moment";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      land_success
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);

    return (
      <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }

            if (error) {
              return console.log("LAUNCH_QUERY", error);
            }

            const {
              flight_number,
              mission_name,
              launch_year,
              launch_date_local,
              launch_success,
              details,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;
            return (
              <>
                <h1 className="display-4 my-4 border-bottom border-secondary">
                  {mission_name}
                </h1>

                <h4 className="mb-3">Spacex Launch Program</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="font-weight-bold text-white mr-2">
                      Flight Number:
                    </span>
                    {flight_number}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold text-white mr-2">
                      Launch Year:
                    </span>
                    {launch_year}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold text-white mr-2">
                      Launch Date:
                    </span>
                    {/* <Moment format="YYYY-MM-DD HH:mm">
                      {launch_date_local}
                    </Moment> */}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold text-white mr-2">
                      Launch Successful:
                    </span>
                    <span
                      className={classNames({
                        "text-success": launch_success,
                        "text-danger": !launch_success
                      })}
                    >
                      {launch_success ? "Yes" : "No"}
                    </span>
                  </li>
                  {details && (
                    <li className="list-group-item">
                      <span className="font-weight-bold text-white mr-2">
                        Details:
                      </span>
                      {details}
                    </li>
                  )}
                </ul>
                <hr />
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="font-weight-bold text-white mr-2">
                      Rocket Id:
                    </span>
                    {rocket_id}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold text-white mr-2">
                      Rocket Name:
                    </span>
                    {rocket_name}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold text-white mr-2">
                      Rocket Type:
                    </span>
                    {rocket_type}
                  </li>
                </ul>
                <hr />
                <Link to="/" className="btn btn-secondary mb-4">
                  Back
                </Link>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}
