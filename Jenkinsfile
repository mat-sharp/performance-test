pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                sh 'chmod +x setup_k6.sh'
                sh './setup_k6.sh'
                sh 'k6 run performance/test.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}