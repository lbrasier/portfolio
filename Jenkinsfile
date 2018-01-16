pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      steps {
        dir(path: '../current') {
          deleteDir()
          git(url: 'https://github.com/lbrasier/portfolio.git', branch: 'develop')
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