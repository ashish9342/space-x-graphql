import React, { Component } from "react";
import gql from "graphql-tag";

import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks"

import CONFIGS from './../configs/configs'

import LaunchItem from "./LaunchItem";
import LaunchRocket from "./LaunchRocket";
// import MissionKey from "./MissionKey";

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
const LAUNCHES_QUERY = gql`
  query LaunchesQuery  {
    launches  {
      flight_number
      mission_name
      mission_id
      launch_year 
      launch_date_local
      launch_success
      land_success
      links {
        mission_patch_small
      }
    }
  }
`;
const update = (data, year) => {

  if (!year) {
    return data
  }
  // let data;
  console.log(data, year)
  // console.log(data.filter(obj => obj.launch_year === year))

  return data.filter(obj => obj.launch_year === year)
  // 
}

export default function Launches({ year }) {


  // render() {
  console.log('chal be ', year);
  // const { loading, error, data, networkStatus } = useQuery(
  //   LAUNCHES_QUERY,
  //   {
  //     variables: { year }
  //   }
  // );
  // if (networkStatus === 4) return "Refetching!";
  // if (loading) return null;
  // if (error) return `Error!: ${error}`;
  return (<>
    <h1 className="display-4 my-4">SpaceX Launch Programs</h1>
    {/* <MissionKey /> */}

    <Query query={LAUNCHES_QUERY} variables={{ year }}>
      {({ loading, error, data, refetch }) => {
        if (loading) {
          console.log(LAUNCHES_QUERY)
          return <h4>Loading...</h4>;
        }

        if (error) {
          return console.log("LAUNCHES_QUERY", error);
        }
        console.log();
        return (
          <div className="row">
            <div className="col-md-2">
              {
                CONFIGS.year.map(year => (<button key={year} className="btn btn-primary" onClick={(e) => refetch(year)}>{year}</button>))
              }
            </div>
            <div className="col-md-10">

              <div className="row">
                {/* {data.launches.map((launch) => (
                      <LaunchItem key={launch.flight_number} launch={launch} />
                    ))} */}
                <LaunchRocket data={data.launches} />
              </div>
            </div>
          </div>
        )
      }
      }
    </Query>
  </>
  );
  // }
}
