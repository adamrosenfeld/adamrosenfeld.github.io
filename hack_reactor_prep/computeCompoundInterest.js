function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    var compoundedInterest = principal * Math.pow((1+ (interestRate/compoundingFrequency)), (compoundingFrequency * timeInYears)) - principal;
    return compoundedInterest;
  }