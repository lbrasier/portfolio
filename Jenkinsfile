pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      steps {
        dir(path: '../current') {
          deleteDir()
          git(url: 'https://github.com/lbrasier/portfolio.git', branch: 'develop')
          bat(script: '"C:\\Program Files\\Nuget\\nuget.exe" restore "..\\current\\ContactListSample\\ContactsList.API.csproj" -SolutionDirectory "..\\current\\ContactListSample"', returnStdout: true, returnStatus: true)
          bat(script: '"C:\Windows\Microsoft.NET\Framework64\v4.0.30319\MSBuild.exe" "..\\current\\ContactListSample\\ContactsList.API.csproj"
		}
        
      }
    }
    stage('Test') {
      steps {
        sleep 1
      }
    }
    stage('Deploy - DEV') {
      steps {
        sleep 2
      }
    }
    stage('Deploy - STG') {
      steps {
        sleep 3
      }
    }
    stage('Deploy - PROD') {
      steps {
        sleep 4
      }
    }
  }
}