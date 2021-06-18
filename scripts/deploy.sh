#!/bin/bash
git add . && git commit -m "deploy script added" && git status
docker run -v ${TRAVIS_BUILD_DIR}:/kube smesch/kubectl kubectl --kubeconfig kubeconfig set image deployment/travispy travispy=dotunn/travis:node0