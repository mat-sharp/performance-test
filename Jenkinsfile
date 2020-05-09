pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker run loadimpact/k6 run - <./performance/test.js'
            }
        }
    }
}