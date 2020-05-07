pipeline {
    agent any
    stages {
        stage ('Build'){
            steps {
                sh 'wget https://bintray.com/loadimpact/rpm/rpm -O bintray-loadimpact-rpm.repo'
                sh 'sudo mv bintray-loadimpact-rpm.repo /etc/yum.repos.d/'
                sh 'sudo yum install k6'
            }
        }
        stage('Test') {
            steps {
                sh 'ls'
            }
        }
    }
}