# Copyright Strimzi authors.
# License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
Feature: kafka-management-ui core UX

Scenario: When a user accesses the kafka-management-ui, they see the home page
    Given I am on the kafka-management-ui homepage
    Then the welcome message appears
    And version information about this UI is displayed