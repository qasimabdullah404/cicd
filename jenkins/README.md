# Jenkins Continuous Everything

## Overview

Jenkins is a self-contained, open-source automation server that can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software. Jenkins is a highly extensible product whose functionality can be extended through the installation of plugins. It is a server-based system that runs in servlet containers such as Apache Tomcat. It runs on the Java ecosystem. Jenkins is useful if your goal is either continuous integration or continuous delivery. 

Its major contributors include GitHub, CloudBeers, JFrog, RedHat, AWS, Open Source Lab etc. Jenkins releases a new update weekly. The latest version is 2.292 while the LTS version is 2.277.4.

## Features

### Pros

- It is open-source, free and supported by a huge community.
- It is easily extensible and customizable. It has over 100 Plug-ins capable of added resources, features, and functions within the product itself.
- It allows for consistent scripting across major operating systems.
- Effortless auditing of previous runs. Jenkins capture console output for both stdout and stderr while running jobs.

### Cons

- It can be difficult to configure.
- Most plugins are no longer maintained and the documentation is not readily updated to reflect changes.
- The UI is not user friendly and does not evolve with modern UI trends.
- It does not provide an analytics feature for an end to end development cycle and does not provide integration with available monitoring tools.

## Installation Requirements

Jenkins is typically run as a standalone application in its own process with the built-in Java servlet container/application server. However, a knowledge of Java programming language is recommended but not required.

Jenkins can be installed on the following operating systems and platforms - Linux, Docker, Kubernetes, Windows, macOS, WAR files.

Jenkins can also be run on the cloud and many public cloud vendors provide their own Jenkins installation guides and packages.

### Hardware requirements

- 2 GB of RAM
- 10 GB of drive space

The recommended image is the Official Jenkins Docker image from Docker Hub. It can be run on Windows, macOS and Linux operating systems.

However, this image doesn’t have docker CLI inside it and is not bundled with frequently used Blue Ocean plugins and features.

[Jenkins Installation](https://www.notion.so/5c70ecc3ab734031ac9ccb4733149011)

## Pricing

Jenkins is free. Jenkins Enterprise provided by CloudBees is not free

## Authentication and Security

Jenkins authenticate users using the concept of security realm. The security realm determines user identity and group memberships. Authorization is done by an authorization strategy. GitHub Authentication is an example of how the security realm and authorization strategy works to control access to Jenkins.