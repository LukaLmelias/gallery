// define slack notification colors
def COLOR_MAP = [
    'FAILURE' : 'danger',
    'SUCCESS' : 'good'
]


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
                sh "rm -rf /var/jenkins_home/workspace/gallery-pipeline/node_modules/log-symbols" // remove some locked files
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
                sh "curl ${env.RENDER_WEBHOOK}"
            }
        }
    
    }
    
    // post to slack on success/failure
    post {
        always {
            slackSend(
                channel: '#luka_ip1',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* job ${env.JOB_NAME}  \n build ${env.BUILD_NUMBER} \n more info at (<${env.BUILD_URL}|Open>) "
            )
        }
        //"Build deployed successfully "- ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)
        // // post to slack on Failure
        // post {
        //     failure {
        //         slackSend failOnError: true message: "Build failed  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        // }
// }
        
    }
}