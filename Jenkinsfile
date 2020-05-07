pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                sh 'docker pull loadimpact/k6'
                sh 'docker run -i loadimpact/k6 run - <./performance/test.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}