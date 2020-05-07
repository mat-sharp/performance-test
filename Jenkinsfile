pipeline {
    agent { docker { image 'loadimpact/k6:0.26.2' } }
    stages {
        stage('build') {
            steps {
                sh 'k6 run ./performance/test.js'
            }
        }
    }
}