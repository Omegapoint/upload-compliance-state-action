import { UrlBody } from './UrlBody';

export class UrlBodyBuilder {
  url: UrlBody;

  constructor() {
    this.url = new UrlBody();
  }

  setThreatModelingDate(threatModelingDate: string | undefined ): this {
    if (!threatModelingDate) {
      return this;
    } else {
      this.url.threatModelingDate = threatModelingDate;
      return this;
    }
  }

  setNumberOfReviewers(numberOfReviewers: string | undefined): this {
    if (!numberOfReviewers) {
      return this;
    } else {
      this.url.numberOfReviewers = numberOfReviewers;
      return this;
    }
  }

  setScaTool(scaTool: string | undefined): this {
    if (!scaTool) {
      return this;
    } else {
      this.url.scaTool = scaTool;
      return this;
    }
  }

  setSastTool(sastTool: string | undefined): this {
    if (!sastTool) {
      return this;
    } else {
      this.url.sastTool = sastTool;
      return this;
    }
  }

  setSecureScore(secureScore: string | undefined): this {
    if (!secureScore) {
      return this;
    } else {
      this.url.secureScore = secureScore;
      return this;
    }
  }

  setAllowedLocationPolicy(allowedLocationPolicy: string | undefined): this {
    if (!allowedLocationPolicy) {
      return this;
    } else {
      this.url.allowedLocationPolicy = allowedLocationPolicy;
      return this;
    }
  }

  setPentestDate(pentestDate: string | undefined): this {
    if (!pentestDate) {
      return this;
    } else {
      this.url.pentestDate = pentestDate;
      return this;
    }
  }

  setNumberOfDeployedVMs(numberOfDeployedVMs: string | undefined): this {
    if (!numberOfDeployedVMs) {
      return this;
    } else {
      this.url.numberOfDeployedVMs = numberOfDeployedVMs;
      return this;
    }
  }

  setNumberOfHumansInSubscription(
    numUserInProdSeverity1: string | undefined,
    numUserInProdSeverity2: string | undefined,
    numUserInProdSeverity3: string | undefined
  ): this {
    if (!numUserInProdSeverity1 || !numUserInProdSeverity2 || !numUserInProdSeverity3) {
      return this;
    } else {
      this.url.usersInProduction = 'usersInProduction';
      return this;
    }
  }

  setNumberOfExposedSecrets(numberOfExposedSecrets: string | undefined): this {
    if (!numberOfExposedSecrets) {
      return this;
    } else {
      this.url.numberOfExposedSecrets = numberOfExposedSecrets;
      return this;
    }
  }

  setCodeQualityTool(codeQualityTool: string | undefined): this {
    if (!codeQualityTool) {
      return this;
    } else {
      this.url.codeQualityTool = codeQualityTool;
      return this;
    }
  }

  build(): UrlBody {
    return this.url;
  }
}
