const sonarqubeScanner = require('sonarqube-scanner')

sonarqubeScanner(
    {
        serverUrl: "http://localhost:9000",
        options: {
            'sonar.sources': 'handlers,models,routes,plugins,schemas',
            'sonar.tests': 'test',
            'sonar.inclusions': '**', //Entry point of your code
            'sonar.test.inclusions':  'test/**/*.spec.js,src/**/*.spec.js,src/**/*.spec.ts,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'

        }
    }, () => {});