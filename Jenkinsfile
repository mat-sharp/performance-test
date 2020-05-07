pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'cd performance'
                sh 'ls -a'
                sh 'chmod +x setup_k6.sh'
            }
        }
    }
}