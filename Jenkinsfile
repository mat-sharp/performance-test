pipeline {
    agent any
    stages {
        stage('Performance test') {
            steps {
                sh 'docker run -i loadimpact/k6 run - <./performance/test.js'
                // sh 'docker run -i --rm  -v "$PWD":/performance -w /performance node:slim node ./performance/exporter.js'
                
            }
        }
    }
}