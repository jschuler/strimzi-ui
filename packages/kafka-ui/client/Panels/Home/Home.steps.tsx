/*
 * Copyright Strimzi authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */
import { Given, When, Then, Fusion } from 'Panels/Home/Panels/Home/Panels/Home/Panels/Home/jest-cucumber-fusion';
import { RenderResult } from 'Panels/Home/Panels/Home/Panels/Home/Panels/Home/@testing-library/react';
import merge from 'Panels/Home/Panels/Home/Panels/Home/Panels/Home/lodash.merge';
import { renderWithCustomConfigFeatureFlagContext } from 'Panels/Home/Panels/Home/Panels/Home/Panels/Home/utils/test';
import { Home } from '../Home';
import React, { ReactElement } from 'Panels/Home/Panels/Home/Panels/Home/Panels/Home/react';

let renderResult: RenderResult;
let component: ReactElement;
let showVersionSet: boolean;

const coreConfigFromContext = {
  client: { about: { version: '34.34.34' } },
  featureFlags: {
    client: {
      Home: {
        showVersion: true,
      },
    },
  },
};

Given('a Home component', () => {
  component = <Home />;
});

When('it is rendered', () => {
  renderResult = renderWithCustomConfigFeatureFlagContext(
    coreConfigFromContext,
    component
  );
  showVersionSet = true;
});

When('it is rendered with no version', () => {
  renderResult = renderWithCustomConfigFeatureFlagContext(
    merge({}, coreConfigFromContext, {
      featureFlags: {
        client: {
          Home: {
            showVersion: false,
          },
        },
      },
    }),
    component
  );
  showVersionSet = false;
});

Then('it should display the expected text', () => {
  const { getByText, queryByText } = renderResult;
  expect(getByText('Welcome to the Strimzi UI')).toBeInTheDocument();
  const versionString = `Version: ${coreConfigFromContext.client.about.version}`;
  showVersionSet
    ? expect(getByText(versionString)).toBeInTheDocument()
    : expect(queryByText(versionString)).not.toBeInTheDocument();
});

Fusion('Home.feature');
