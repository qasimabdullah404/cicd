#!/bin/bash
docker run -v ${TRAVIS_BUILD_DIR}:/kube smesch/kubectl kubectl --kubeconfig kubeconfig set image deployment/travispy travispy=dotunn/travis:py01





# /usr/local/bin/kubectl \
#  --kubeconfig=/dev/null \
#  --server=$KUBERNETES_SERVER \
#  --certificate-authority=cert.crt \
#  --token=$KUBERNETES_TOKEN \
#  apply -f ./k8s/
#echo "The build number is ${TRAVIS_BUILD_NUMBER}"
#/usr/local/bin/kubectl \
#  --kubeconfig=/dev/null \
#  --server=$KUBERNETES_SERVER \
#  --certificate-authority=cert.crt \
#  --token=$KUBERNETES_TOKEN \
#  set image deployment/travispy travispy=dotunn/travis:py01 --record