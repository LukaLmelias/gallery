pipeline{
    
    // define agents
    agent any
    

    // define tools
    tools{
        nodejs 'node'
    }


    // define stages
    stages{
        
        // stage 1
        stage("clone git repo"){
            steps{
                git branch: 'master', url:'https://github.com/LukaLmelias/gallery.git'
            }
        }
        
        // stage 2
        stage("npm install"){
            steps{
                sh "npm install"
            }
        }
        

        // stage 3
        stage("npm test"){
            steps{
                sh "npm test"
            }
        }


        // stage 4
        stage("Deploy to render"){
            steps{
                sh "curl https://api.render.com/deploy/srv-cofnv76v3ddc739mdj6g?key=MqZUsVkPGaQ"
            }
        }
    post {
        success {
            slackSend "Build deployed successfully - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }

        // // post to slack on Failure
        // post {
        //     failure {
        //         slackSend failOnError: true message: "Build failed  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        // }
// }
        
    }
}