pipeline {
    agent any
    tools(nodejs "node")
    stages {
        stage('Building') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run build'
                    jsObfuscate('dist')
                }
            }
        }
    }
}
