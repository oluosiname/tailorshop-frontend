import React from "react";
import ReactDOM from "react-dom";
import Address from "../Address";
import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
const address = {
  uuid: "uuid",
  address1: "Block 262",
  address2: "Flat 10",
  city: "Festac",
  state: "Lagos",
  primary: true,
};

const setPrimaryAddress = jest.fn((uuid) => {
  return;
});
const deleteAddress = jest.fn((uuid) => {
  return;
});

it("renderswithout crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Address />, div);
});

it("renders properly", () => {
  const { getByTestId } = render(
    <Address
      address={address}
      setPrimaryAddress={setPrimaryAddress}
      deleteAddress={deleteAddress}
    />
  );
  expect(getByTestId("address-address1")).toHaveTextContent("Block 262");
  expect(getByTestId("address-address2")).toHaveTextContent("Flat 10");
  expect(getByTestId("address-city")).toHaveTextContent("Festac");
  expect(getByTestId("address-state")).toHaveTextContent("Lagos");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Address address={address} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("calls delete function", () => {
  const { getByTestId, getByText } = render(
    <Address
      address={address}
      setPrimaryAddress={setPrimaryAddress}
      deleteAddress={deleteAddress}
    />
  );
  fireEvent.click(getByText("Delete"));
  expect(deleteAddress).toHaveBeenCalledTimes(1);
  expect(deleteAddress).toHaveBeenCalledWith("uuid");

  fireEvent.click(getByTestId("toggle-primary-address"));
  expect(setPrimaryAddress).toHaveBeenCalledTimes(1);
  expect(setPrimaryAddress).toHaveBeenCalledWith("uuid");
});
