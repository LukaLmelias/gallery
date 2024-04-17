pipeline{
    
    // define agents
    agent any
    

    // define tools
    tools{
        gradle 'node'
    }


    // define stages
    stages{
        
        // stage 1
        stage("clone git repo"){
            steps{
                git branch: 'master', url:'https://github.com/LukaLmelias/gallery.git'
            }
        }
    }
}