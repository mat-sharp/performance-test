pipeline {
    agent any
    stages {
        stage('Performance test') {
            steps {
                sh 'docker run -i loadimpact/k6 run - <./performance/test.js'
                sh 'docker run -i -v "$PWD":/performance -w /performance node:latest node performance/exporter.js'
                
            }
        }
        stage('Functional test') {
            steps {
                sh 'docker run -i -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
            }
        }
    }
}