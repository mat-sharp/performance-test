pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'cd master'
                sh 'pwd && ls'
                sh 'chmod +x setup_k6.sh'
            }
        }
    }
}