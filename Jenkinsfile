pipeline {
    agent any 
    stages {
        stage('Building') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
