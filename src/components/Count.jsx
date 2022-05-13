import React from "react";
import "./Count.css";

export default function Count({ count }) {
  return <div className="count">Number of flights : {count}</div>;
}
