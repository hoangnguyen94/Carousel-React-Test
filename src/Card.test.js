import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Card from "./Card";

it( "render without crash", () =>
{
    render( <Card /> );
} )

it( "matching the snapshot", () =>
{
    const { asFragment } = render( <Card /> );
    expect( asFragment() ).toMatchSnapshot();
} );

