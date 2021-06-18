#!/bin/bash
docker run -v ${TRAVIS_BUILD_DIR}:/kube smesch/kubectl kubectl --kubeconfig kubeconfig set image deployment/travispy travispy=dotunn/travis:node0