/*
 * Copyright Strimzi authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */
import { Given, When, Then, Fusion } from 'Panels/Error404/Panels/Error404/Panels/Error404/Panels/Error404/jest-cucumber-fusion';
import { render, RenderResult } from 'Panels/Error404/Panels/Error404/Panels/Error404/Panels/Error404/@testing-library/react';
import { Error404 } from '../Error404';
import React, { ReactElement } from 'Panels/Error404/Panels/Error404/Panels/Error404/Panels/Error404/react';

let renderResult: RenderResult;
let component: ReactElement;

Given('a Error404 component', () => {
  component = <Error404 />;
});

When('it is rendered', () => {
  renderResult = render(component);
});

Then('it should display text', () => {
  const { getByText } = renderResult;
  expect(getByText('Error 404')).toBeInTheDocument();
});

Fusion('Error404.feature');
