pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      environment {
        MYWORKSPACE = '../current'
      }
      steps {
        deleteDir()
		sleep 2
        dir(path: '../current') {
          VersionNumber(versionNumberString: '1.0.${BUILD_YEAR}${BUILD_MONTH}${BUILD_DAY}.${BUILDS_TODAY}', projectStartDate: ' 2017-11-01')
          git(url: 'https://github.com/lbrasier/portfolio.git', branch: 'develop')
		  sleep 2
          fileExists 'ContactListSample/ContactsList.API.csproj'
          bat(script: '"C:\\Program Files\\Nuget\\nuget.exe" restore "$MYWORKSPACE\\ContactListSample\\ContactsList.API.csproj" -SolutionDirectory "$MYWORKSPACE\\ContactListSample"', returnStdout: true)
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
  environment {
    MYWORKSPACE = '../general'
  }
}