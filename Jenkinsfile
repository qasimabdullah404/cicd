pipeline {
  environment {
    registry = "chiamakaobitube/jenkins-python"
    registryCredential = 'Docker'
    dockerImage = ''
  }
  agent {
        docker { 
            image 'python:3.9.4'
          }
    }
  stages {
    stage('Run python') {
      steps {
          sh 'pip --version'
      }
   }
    stage('build') {
      steps {
        sh '''
            python -m venv .venv 
            . .venv/bin/activate
            pip install -r requirements.txt
          '''
      }
    }
    stage('test') {
      steps {
        sh '''
            python -m venv .venv 
            . .venv/bin/activate
            python test.py
          '''
      }
    }  
      stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
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
      post {
        always {
          junit 'test-reports/*.xml'
        }
      }  
  }
}
