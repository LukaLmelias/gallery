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
        stage("start server"){
            steps{
                sh "node server"
            }
        }
        
        
    }
}