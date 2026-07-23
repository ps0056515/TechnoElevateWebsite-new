pipeline {
    agent any

    environment {
        IMAGE_NAME     = 'innovexce-web'
        CONTAINER_NAME = 'innovexce-web-app'
        PORT           = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image ${IMAGE_NAME}:${BUILD_NUMBER}..."
                    sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Test & Verify Container') {
            steps {
                script {
                    echo "Testing container health..."
                    sh """
                        docker run -d --name ${CONTAINER_NAME}-test -p 3001:${PORT} ${IMAGE_NAME}:${BUILD_NUMBER}
                        sleep 3
                        docker ps | grep ${CONTAINER_NAME}-test
                        docker rm -f ${CONTAINER_NAME}-test
                    """
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    echo "Deploying container ${CONTAINER_NAME}..."
                    sh """
                        if [ \$(docker ps -a -q -f name=^/${CONTAINER_NAME}\$) ]; then
                            echo "Stopping existing container..."
                            docker stop ${CONTAINER_NAME} || true
                            docker rm ${CONTAINER_NAME} || true
                        fi
                        echo "Starting new container on port ${PORT}..."
                        docker run -d --name ${CONTAINER_NAME} --restart unless-stopped -p ${PORT}:${PORT} ${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline complete."
        }
        success {
            echo "Successfully built and deployed ${IMAGE_NAME}:${BUILD_NUMBER}"
        }
        failure {
            echo "Pipeline failed. Cleaning up failed test containers if any..."
            sh "docker rm -f ${CONTAINER_NAME}-test || true"
        }
    }
}
