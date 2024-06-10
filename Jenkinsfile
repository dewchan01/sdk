pipeline {
    agent any
    stages {
        stage("Building") {
                service: {
                  dir('backend') {
                    steps {
                      sh 'npm install'
                      sh 'npm run build'
                    }
                    jsObfuscate('dist')
                  }
                }
        }
    }
}