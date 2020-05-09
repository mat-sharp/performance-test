pipeline {
    agent any
    stages {
        stage('Performance test') {
            steps {
                sh 'docker run -i loadimpact/k6 run - <./performance/test.js'
            }
        }
        stage('Functional test') {
            steps {
                sh 'docker run -it -v $PWD:/functional -w /functional cypress/included:3.4.0'
            }
        }
    }
}