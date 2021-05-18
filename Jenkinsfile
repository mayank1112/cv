pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                echo "$USER";
                sh "pwd"
                sh "export PATH=$PATH:/usr/local/bin/"
                sh "/usr/local/bin/npm install"
                sh "/usr/local/bin/npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}