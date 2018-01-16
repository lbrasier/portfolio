pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      environment {
        ee = 'evalue1'
      }
      steps {
        deleteDir()
		dir(path: '../current')
        git(url: 'https://github.com/lbrasier/portfolio.git', branch: 'develop')
        VersionNumber(versionNumberString: '1.0.${BUILD_YEAR}${BUILD_MONTH}${BUILD_DAY}.${BUILDS_TODAY}', projectStartDate: ' 2017-11-01')
        fileExists 'ContactListSample/ContactsList.API.csproj'
        bat '"C:\\Program Files\\Nuget\\nuget.exe" restore "%WORKSPACE%\\ContactListSample\\ContactsList.API.csproj" -SolutionDirectory "%WORKSPACE%\\ContactListSample"'
        
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
    ee = 'evalue'
  }
}