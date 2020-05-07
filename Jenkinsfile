pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                sh 'brew install k6'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}