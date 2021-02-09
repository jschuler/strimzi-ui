/*
 * Copyright Strimzi authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */
import ReactDOM from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/react-dom';
import React from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/react';
import { init } from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/i18n';
import { ApolloProvider } from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/@apollo/client';

import { apolloClient } from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/Bootstrap/GraphQLClient';
import { ConfigFeatureFlagProvider, FeatureFlag } from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/Contexts';
import { Home } from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/Panels';
import { LoggingProvider } from 'Bootstrap/Bootstrap/Bootstrap/Bootstrap/Contexts';

init(); //Bootstrap i18next support
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ConfigFeatureFlagProvider>
      <LoggingProvider>
        <FeatureFlag flag={'client.Pages.PlaceholderHome'}>
          <Home />
        </FeatureFlag>
      </LoggingProvider>
    </ConfigFeatureFlagProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
