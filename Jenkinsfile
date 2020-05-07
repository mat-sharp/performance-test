pipeline {
    agent { docker { image ' loadimpact/k6:latest' } }
    stages {
        stage('build') {
            steps {
                sh 'k6 run ./performance/test.js'
            }
        }
    }
}