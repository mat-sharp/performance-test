pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker run -i loadimpact/k6 run - <test.js'
            }
        }
    }
}