pipeline {
    agent any
    stages {
        stage ('Build'){
            steps {
                wget https://bintray.com/loadimpact/rpm/rpm -O bintray-loadimpact-rpm.repo
                sudo mv bintray-loadimpact-rpm.repo /etc/yum.repos.d/
                sudo yum install k6
            }
        }
        stage('Test') {
            steps {
                sh 'ls'
            }
        }
    }
}