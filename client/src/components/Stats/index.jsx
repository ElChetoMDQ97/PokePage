import React from "react";

const Stats = ({valor, nombre}) => {
  return (
    <>
      <div>
        <meter
          min="0"
          max="200"
          value={valor}
          low="40"
          high="130"
          optimum="200"
        />
        <p>
          {nombre} ------ <span>{valor}</span>
        </p>
      </div>
    </>
  );
};

export default Stats;