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
                checkout scm
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
                sh 'docker stop ${CONTAINER_NAME} || true'
                sh 'docker rm ${CONTAINER_NAME} || true'
                sh 'docker run -d -p 3001:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}'
            }
        }
    }
}
