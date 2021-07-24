import React from "react";
import { Route } from "react-router-dom";

// Layout
import PlayLayout from "../layouts/Movie.layout";

const PlayHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <PlayLayout>
            <Component {...props} />
          </PlayLayout>
        )}
      />
    </>
  );
};

export default PlayHOC;