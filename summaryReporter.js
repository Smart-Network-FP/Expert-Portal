class SummaryReporter {
  onRunComplete(contexts, results) {
    console.log(
      `Test Suites: ${results.numPassedTestSuites} passed, ${
        results.numTotalTestSuites
      } total`,
    );
    console.log(
      `Tests: ${results.numPassedTests} passed, ${results.numTotalTests} total`,
    );
    console.log(
      `Snapshots: ${results.snapshot.matched} passed, ${
        results.snapshot.total
      } total`,
    );
    console.log(`Time: ${results.runtime}ms`);
  }
}

module.exports = SummaryReporter;
