pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                docker pull loadimpact/k6
                docker run -i loadimpact/k6 run - <./performance/test.js
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}