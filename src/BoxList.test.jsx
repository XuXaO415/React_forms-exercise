import React from "react";
import { render, screen } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders w/o crahsing", function() {
    render(<BoxList />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment).toMatchSnapshot();
});

it("can add new box", function() {
    const utils = render(<BoxList />);
});

// it("remove box", function() {
//     render(<BoxList />);
// })
