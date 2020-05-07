pipeline {
    agent { dockerfile true }
    stages {
        stage('build') {
            steps {
                sh 'docker run k6:latest'
            }
        }
    }
}