pipeline {
  environment {
    registry = "chiamakaobitube/node-jenkins"
    registryCredential = 'dockerhub'
  }
  agent any
  parameters {
    gitParameter branchFilter: 'origin/(.*)', defaultValue: 'jenkins-node', name: 'BRANCH', type: 'PT_BRANCH'
  }
  
  tools {nodejs "NodeJS"}

  stages { 
    stage('Git Checkout') {
      steps {
        git branch: "${params.BRANCH}", url: 'https://github.com/Nautilus-Technologies/cicd.git'
      }
    }
    stage('Build') {
       steps {
         sh '''
         npm install
         npm run build
         '''
       }
    }
   stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    /*
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    */
  }
}