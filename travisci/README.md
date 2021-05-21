# Travis CI

## Overview

Travis CI is a hosted and distributed commercial CI tool used to build and test projects hosted at GitHub, Bitbucket and other git repositories. Formerlly open-sourced, the plan was depreacated at the end of 2020. It's configured by adding a file named .travis.yml, which is a YAML format text file, to the root directory of the repository. This file specifies the programming language used, the desired building and testing environment (including dependencies which must be installed before the software can be built and tested), and various other parameters. Travis CI automatically detects when a commit has been made and pushed to a GitHub repository that is using Travis CI, and each time this happens, it will try to build the project and run tests. 

## Features

### Pros

* Very easy to setup
* Surpports both manual and automatic build triggers
* Error tracking is easy 
* Less complicated and easy to learn

### Cons

* It's not totally free
* Simultaneous builds isn't available on the free tier
* Can only take on a maximum of 5 concurrent build jobs at a go (for a paid plan)

## Installation Requirements

Travis CI is easy integrate, simply by sigining in with your github account on travis-ci.com, you authorise travis-ci to access your repositories.

## Pricing

Travis CI has a free plan and 3 other paid plan for business
* For 1 concurrent job @ $69/month
* For 3 concurrent jobs @ $129/month
* For 5 concurrent jobs @ $249/month

For more concurrent jobs usage, contact the Travis CI support via email; support@travis-ci.com 

## Authentication and Security

While security is a two way street, Travis CI is secured and encrypted with SSL/TLS. For integrations with other platforms, access tokens (which is a string) are integrated between travis ci and the target deployment. On the client side, keeping important code credentials are done with the  use of environment variables which is basically a security measure of keeping your code as secure as possible. Also, travis is granted full access to code repositories and  AWS (or other cloud providers) with access tokens as well to enable code to be pushed to its environment. These tokens and other secrets are stored as environment variables in travis with the repsective keys passed in the code build.

## Monitoring, Tracing and Logging

TravisCI supports a number of monitoring and logging tools, some examples include datadog, catwalk, Meercode, etc. These are all third party tools that could be integrated into TravisCI to monitor the builds, get notifications on build status and so on. 

## Feedback and Alert Integrations

TravisCI supports a range of alert notifications simply by adding a configuration block to the travis yml file. It supports notification to slack, email, irc channels, hipchat and a whole lot of other notification channels.. For further information on alert integrations, visit https://docs.travis-ci.com/user/notifications/  . 