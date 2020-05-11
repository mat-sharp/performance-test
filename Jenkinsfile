pipeline {
    agent any
    stages {
        stage('Performance test') {
            steps {
                sh 'docker run -i -v "$PWD":/performance -w /performance loadimpact/k6 run --summary-export=./performance/export.json - <./performance/test.js'
                sh 'docker run -i --rm  -v "$PWD":/performance -w /performance node:slim node ./performance/exporter.js'
                
            }
        }
        stage('Functional test') {
            steps {
                sh 'docker run -i -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
            }
        }
    }
}