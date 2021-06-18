#!/bin/bash
kubectl create namespace travis-example
/usr/local/bin/kubectl create -f ./k8s/deployment.yaml
/usr/local/bin/kubectl get deploy,po --namespace=travis-example
# Make sure created pod is scheduled and running.
JSONPATH='{range .items[*]}{@.metadata.name}:{range @.status.conditions[*]}{@.type}={@.status};{end}{end}'; until kubectl -n travis-example get pods -lapp=travispy -o jsonpath="$JSONPATH" 2>&1 | grep -q "Ready=True"; do sleep 1;echo "waiting for travis-py deployment to be available"; kubectl get pods -n travis-example; done
minikube stop
echo "ALL DONE!!!"



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