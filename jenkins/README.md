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

|  Environment | Software Requirements |  Link          
| -----------  | --------------------  | --------------
| Docker       |   Docker, Java 8/11   | https://www.jenkins.io/doc/book/installing/docker/
| Kubernetes   |   Docker, Kubernetes  | https://www.jenkins.io/doc/book/installing/kubernetes/
| Linux        |  Java                 | https://www.jenkins.io/doc/book/installing/linux
| Windows      |  Java                 | https://www.jenkins.io/doc/book/installing/windows
| macOS        | Homebrew              | https://www.jenkins.io/download/lts/macos/
| WAR files    | Java                  | https://www.jenkins.io/doc/book/installing/war-file/


## Pricing

Jenkins is free. Jenkins Enterprise provided by CloudBees is not free

## Authentication and Security

Jenkins authenticate users using the concept of security realm. The security realm determines user identity and group memberships. Authorization is done by an authorization strategy. GitHub Authentication is an example of how the security realm and authorization strategy works to control access to Jenkins.

In addition to access control of users, access control for builds limits what builds can do, once started.

As of Jenkins 2.0, many of the security options were enabled by default to ensure that Jenkins environments remained secure unless an administrator explicitly disabled certain protections.

## Monitoring, Tracing and Logging

Jenkins employs the use of numerous plugins for its monitoring. Examples include but not limited to Datadog, Prometheus and Grafana, JavaMelody, Stackify Retrace and Ping Thread installed on every remoting connection, such as controller/agent connections, regardless of its transport mechanism (such as SSH, JNLP, etc.).

Jenkins uses `java.util.logging` for logging. The `java.util.logging` system by default sends every log above `INFO` to stdout. Jenkins is equipped with a GUI for configuring/collecting/reporting log records of your choosing. This can be viewed from the **System Log**  of the **Manage Jenkins**  page. 

Details on logging on different environments can be found here - [https://www.jenkins.io/doc/book/system-administration/viewing-logs/](https://www.jenkins.io/doc/book/system-administration/viewing-logs/)

## Feedback and Alert Integration

The Email Extension plugin allows you to configure every aspect of email notifications. You can customize when an email is sent, who should receive it, and what the email says. Jenkins email notification can be configured system-wide or scoped to a particular project. 

Before using this plugin from a project, you must first configure some system-wide settings. Go to the Jenkins system-wide configuration page (**Manage Jenkins**, **Configure System**). The configuration for this plugin can be found in the section entitled **Extended E-mail Notification**. This configuration should match the settings for your SMTP mail server.

The **Slack Notification** plugin can be installed in Jenkins either for all jobs or specific projects. On Slack, the Jenkins CI app will also be installed to post build notifications to a channel in Slack.

## Supported CI/CD Workflows

The default interaction model with Jenkins, historically, has been very web UI driven, requiring users to manually create jobs, then manually fill in the details through a web browser. With the introduction of the Pipeline plugin, users now can implement a project’s entire build/test/deploy pipeline in a Jenkinsfile and store that alongside their code, treating their pipeline as another piece of code checked into source control. Jenkins Pipeline could either use the Declarative or Scripted syntax.