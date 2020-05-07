pipeline {
    agent { docker { image 'loadimpact/k6'} }
    
    stages {
        stage('Test') {
            steps {
                sh 'ls'
            }
        }
    }
}