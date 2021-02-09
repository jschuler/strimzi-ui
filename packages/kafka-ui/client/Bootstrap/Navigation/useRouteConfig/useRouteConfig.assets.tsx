/*
 * Copyright Strimzi authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */
import React, { FunctionComponent } from 'Bootstrap/Navigation/useRouteConfig/Bootstrap/Navigation/useRouteConfig/Bootstrap/Navigation/useRouteConfig/Bootstrap/Navigation/useRouteConfig/react';

const generateSimplePage = (text: string): FunctionComponent => {
  const page = () => {
    return <div>{text}</div>;
  };

  return page;
};

export { generateSimplePage };
