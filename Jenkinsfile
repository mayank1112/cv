pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                echo "logged in as USER:";
                echo "$USER";
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}