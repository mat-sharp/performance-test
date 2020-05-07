pipeline {
    agent { 
        docker { 
            image 'loadimpact/k6'
            
        }
    }
    
    stages {
        stage('Test') {
            steps {
                sh 'docker run loadimpact/k6 run <./performance/test.js'
            }
        }
    }
}