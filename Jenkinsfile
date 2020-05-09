pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker run loadimpact/k6 run github.com/loadimpact/k6/samples/http_get.js'
            }
        }
    }
}