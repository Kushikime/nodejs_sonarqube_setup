const scanner = require("sonarqube-scanner").default;

scanner(
  {
    token: process.env.SONAR_TOKEN,
    options: {
      "sonar.projectName": "c360",
      "sonar.projectDescription": "test-123-321",
      "sonar.sources": "src",
      "sonar.tests": "test",
    },
  },
  (error) => {
    if (error) {
      console.error(error);
    }
    process.exit();
  }
);
