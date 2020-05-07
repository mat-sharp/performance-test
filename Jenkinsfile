pipeline {
    agent { dockerfile true }
    stages {
        stage('build') {
            steps {
                sh 'k6 run ./performance/test.js'
            }
        }
    }
}