pipeline {
    agent { 
        docker { 
            image 'loadimpact/k6'
            
        }
    }
    
    stages {
        stage('Test') {
            steps {
                'k6 run test.js'
            }
        }
    }
}