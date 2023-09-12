'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UrlBodyBuilder = void 0;
const UrlBody_1 = require('./UrlBody');
class UrlBodyBuilder {
  constructor() {
    this.url = new UrlBody_1.UrlBody();
  }
  setThreatModelingDate(threatModelingDate) {
    if (!threatModelingDate) {
      return this;
    } else {
      this.url.threatModelingDate = threatModelingDate;
      return this;
    }
  }
  setNumberOfReviewers(numberOfReviewers) {
    if (!numberOfReviewers) {
      return this;
    } else {
      this.url.numberOfReviewers = numberOfReviewers;
      return this;
    }
  }
  setScaTool(scaTool) {
    if (!scaTool) {
      return this;
    } else {
      this.url.scaTool = scaTool;
      return this;
    }
  }
  setSastTool(sastTool) {
    if (!sastTool) {
      return this;
    } else {
      this.url.sastTool = sastTool;
      return this;
    }
  }
  setSecureScore(secureScore) {
    if (!secureScore) {
      return this;
    } else {
      this.url.secureScore = secureScore;
      return this;
    }
  }
  setAllowedLocationPolicy(allowedLocationPolicy) {
    if (!allowedLocationPolicy) {
      return this;
    } else {
      this.url.allowedLocationPolicy = allowedLocationPolicy;
      return this;
    }
  }
  setPentestDate(pentestDate) {
    if (!pentestDate) {
      return this;
    } else {
      this.url.pentestDate = pentestDate;
      return this;
    }
  }
  setNumberOfDeployedVMs(numberOfDeployedVMs) {
    if (!numberOfDeployedVMs) {
      return this;
    } else {
      this.url.numberOfDeployedVMs = numberOfDeployedVMs;
      return this;
    }
  }
  setNumberOfHumansInSubscription(numUserInProdSeverity1, numUserInProdSeverity2, numUserInProdSeverity3) {
    if (!numUserInProdSeverity1 || !numUserInProdSeverity2 || !numUserInProdSeverity3) {
      return this;
    } else {
      this.url.usersInProduction = 'usersInProduction';
      return this;
    }
  }
  setNumberOfExposedSecrets(numberOfExposedSecrets) {
    if (!numberOfExposedSecrets) {
      return this;
    } else {
      this.url.numberOfExposedSecrets = numberOfExposedSecrets;
      return this;
    }
  }
  setCodeQualityTool(codeQualityTool) {
    if (!codeQualityTool) {
      return this;
    } else {
      this.url.codeQualityTool = codeQualityTool;
      return this;
    }
  }
  build() {
    return this.url;
  }
}
exports.UrlBodyBuilder = UrlBodyBuilder;
