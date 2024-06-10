pipeline {
    agent any

    stages {
        stage('Building') {
            steps {
                dir('backend') {
                    script {
                        if (!isPluginActive('nodejs')) {
                            error 'NodeJS plugin is not installed, please install it'
                        }
                    }
                    withNodeJS('node') {
                        sh 'npm install'
                        sh 'npm run build'
                        jsObfuscate(script: 'dist')
                    }
                }
            }
        }
    }
}
