import React from "react";
import { FirstName } from "./Context1";
import { LastName } from "./Context1";

const ComC = (props) => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My Name is {fname} {lname} {props.MyTheme}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
