import React from "react";
import ClientCard from "../ClientCard";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import faker from "faker";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const client = {
  uuid: "uuid",
  first_name: "Olumuyiwa",
  last_name: "Margaret",
  phone_number: "0801111111",
  address: "Gilder strasse 109, 36392 Berlin",
};

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ClientCard />, div);
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <ClientCard client={client} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays client properties", () => {
  const { getByTestId } = render(
    <Router>
      <ClientCard client={client} />
    </Router>
  );

  expect(getByTestId("client-name")).toHaveTextContent(
    `${client.first_name} ${client.last_name}`
  );
  expect(getByTestId("client-address")).toHaveTextContent(client.address);
  expect(getByTestId("client-phone-number")).toHaveTextContent(
    client.phone_number
  );
});

it("contains a link to client page", () => {
  const { getByText } = render(
    <Router>
      <ClientCard client={client} />
    </Router>
  );

  expect(getByText("View Client")).toHaveAttribute(
    "href",
    `/partner/clients/${client.uuid}`
  );
});
