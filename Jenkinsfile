pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                sh 'sudo chmod +x performance/setup_k6.sh'
                sh 'sudo ./performance/setup_k6.sh'
                sh 'k6 run ./performance/test.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}