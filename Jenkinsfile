pipeline {
    agent any
    
    environment {
        CONTAINER_NAME = 'test-app-jk'
        IMAGE_NAME = 'my-app-test-jk'
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('check version') {
            steps {
         
                sh 'docker -v'
            }
        }
        stage('checkout') {
            steps {
                git branch: 'main', credentialsId: 'daeadc3d-af7c-4e81-9751-173f2e15c0ad', url: 'https://github.com/MR-KK0000/workflow-jenkins-test.git'
            }
        }
        
        stage('Install Dependencies') {
            agent {
               docker { 
                   image 'node:18.17.1-alpine3.18'     
                   reuseNode true 
               }
            }
                    
            steps {
                sh 'npm i'
            }
        }

        stage('Run Tests') {
            agent {
               docker { 
                   image 'node:18.17.1-alpine3.18'     
                   reuseNode true 
               }
            }
            
            steps {
                sh 'npm test'
            }
        }
        
        stage('build') {
            steps {
               sh 'docker build -t ${IMAGE_NAME} .'
            }
        }
        
       stage('deploy') {
            steps {
                sh 'docker stop ${CONTAINER_NAME}'
                sh 'docker rm ${CONTAINER_NAME}'
                sh 'docker run -d -p 3001:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}'
            }
        }
    }
}
