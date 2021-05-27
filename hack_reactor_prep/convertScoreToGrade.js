function convertScoreToGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  }
  if (score >= 80 && score <= 89) {
    return 'B';
  }
  if (score >= 70 && score <= 79) {
    return 'C';
  }
  if (score >= 60 && score <= 69) {
    return 'D';
  }
  if (score >= 0 && score <= 59) {
    return 'F';
  }
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }
}