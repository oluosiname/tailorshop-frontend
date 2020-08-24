import React from "react";
import ReactDOM from "react-dom";
import Address from "../Address";
import { render } from "@testing-library/react";

it("renderswithout crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Address />, div);
});

it("renders without crashing", () => {
  const address = {
    uuid: "uuid",
    address1: "Block 262",
    address2: "Flat 10",
    city: "Festac",
    state: "Lagos",
    primary: true,
  };
  const { getByTestId } = render(<Address address={address} />);
  expect(getByTestId("address-address1")).toHaveTextContent("Block 262");
  expect(getByTestId("address-address2")).toHaveTextContent("Flat 10");
  expect(getByTestId("address-city")).toHaveTextContent("Festac");
  expect(getByTestId("address-state")).toHaveTextContent("Lagos");
});
