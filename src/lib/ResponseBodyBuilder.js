"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBodyBuilder = void 0;
const ResponseBody_1 = require("./ResponseBody");
class ResponseBodyBuilder {
    constructor() {
        this.responseBody = new ResponseBody_1.ResponseBody();
    }
    setTeamName(teamName) {
        if (!teamName) {
            return this;
        }
        else {
            this.responseBody.teamName = teamName;
            return this;
        }
    }
    setTeamProjectName(teamProjectName) {
        if (!teamProjectName) {
            return this;
        }
        else {
            this.responseBody.teamProjectName = teamProjectName;
            return this;
        }
    }
    setCodeRepositoryName(codeRepositoryName) {
        if (!codeRepositoryName) {
            return this;
        }
        else {
            this.responseBody.codeRepositoryName = codeRepositoryName;
            return this;
        }
    }
    setSubscriptionId(subscriptionId) {
        if (!subscriptionId) {
            return this;
        }
        else {
            this.responseBody.subscriptionId = subscriptionId;
            return this;
        }
    }
    setThreatModelingDate(threatModelingDate, tmNumberOfActiveTickets, tmNumberOfClosedTickets) {
        if (!threatModelingDate) {
            return this;
        }
        else {
            if (!tmNumberOfActiveTickets && !tmNumberOfClosedTickets) {
                this.responseBody.tmNumberOfActiveTickets = tmNumberOfActiveTickets;
                this.responseBody.tmNumberOfClosedTickets = tmNumberOfClosedTickets;
            }
            this.responseBody.threatModelingDate = threatModelingDate;
            return this;
        }
    }
    setNumberOfReviewers(numberOfReviewers, branchPolicyUpdateDate, branchPolicyUpdateEmail) {
        if (!numberOfReviewers) {
            return this;
        }
        else {
            this.responseBody.numberOfReviewers = numberOfReviewers;
            if (branchPolicyUpdateDate && branchPolicyUpdateEmail) {
                this.responseBody.branchPolicyUpdateDate = branchPolicyUpdateDate;
                this.responseBody.branchPolicyUpdateEmail = branchPolicyUpdateEmail;
            }
            return this;
        }
    }
    setScaTool(scaTool, scaNumberOfSeverity1, scaNumberOfSeverity2, scaNumberOfSeverity3, scaNumberOfSeverity4) {
        if (!scaTool) {
            return this;
        }
        else if (scaTool === 'not specified') {
            this.responseBody.scaTool = scaTool;
            return this;
        }
        else {
            if (!scaNumberOfSeverity1 && !scaNumberOfSeverity2 && !scaNumberOfSeverity3 && !scaNumberOfSeverity4) {
                this.responseBody.scaTool = scaTool;
                this.responseBody.scaNumberOfSeverity1 = scaNumberOfSeverity1;
                this.responseBody.scaNumberOfSeverity2 = scaNumberOfSeverity2;
                this.responseBody.scaNumberOfSeverity3 = scaNumberOfSeverity3;
                this.responseBody.scaNumberOfSeverity4 = scaNumberOfSeverity4;
            }
            else {
                this.responseBody.scaTool = scaTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
            }
            return this;
        }
    }
    setSecureScore(secureScore) {
        if (!secureScore) {
            return this;
        }
        else {
            this.responseBody.secureScore = secureScore;
            return this;
        }
    }
    setAllowedLocationPolicy(allowedLocationPolicy, compliantResources, nonCompliantResources) {
        console.log('(responsebodeybuilder) Checking: compliantResources + nonCompliantResources' +
            compliantResources +
            '+' +
            nonCompliantResources);
        if (!allowedLocationPolicy) {
            return this;
        }
        else {
            if (compliantResources !== undefined && nonCompliantResources !== undefined) {
                this.responseBody.allowedLocationPolicy = allowedLocationPolicy;
                this.responseBody.compliantResources = compliantResources;
                this.responseBody.nonCompliantResources = nonCompliantResources;
            }
            else {
                this.responseBody.allowedLocationPolicy = allowedLocationPolicy; //one or both resources are undefined, maybe print feedback in pipeline
            }
            return this;
        }
    }
    setPentestDate(pentestDate, ptNumberOfActiveTickets, ptNumberOfClosedTickets) {
        if (!pentestDate) {
            return this;
        }
        else {
            if (!ptNumberOfActiveTickets && !ptNumberOfClosedTickets) {
                this.responseBody.ptNumberOfActiveTickets = ptNumberOfActiveTickets;
                this.responseBody.ptNumberOfClosedTickets = ptNumberOfClosedTickets;
            }
            this.responseBody.pentestDate = pentestDate;
            return this;
        }
    }
    setNumberOfDeployedVMs(numberOfDeployedVMs) {
        if (!numberOfDeployedVMs) {
            return this;
        }
        else {
            this.responseBody.numberOfDeployedVMs = numberOfDeployedVMs;
            return this;
        }
    }
    setNumberOfHumansInSubscription(numUserInProdSeverity1, numUserInProdSeverity2, numUserInProdSeverity3) {
        if (!numUserInProdSeverity1 || !numUserInProdSeverity2 || !numUserInProdSeverity3) {
            return this;
        }
        else {
            this.responseBody.numUserInProdSeverity1 = numUserInProdSeverity1;
            this.responseBody.numUserInProdSeverity2 = numUserInProdSeverity2;
            this.responseBody.numUserInProdSeverity3 = numUserInProdSeverity3;
            return this;
        }
    }
    setNumberOfExposedSecrets(numberOfExposedSecrets) {
        if (!numberOfExposedSecrets) {
            return this;
        }
        else {
            this.responseBody.numberOfExposedSecrets = numberOfExposedSecrets;
            return this;
        }
    }
    setCodeQualityTool(codeQualityTool, cqNumberOfSeverity1, cqNumberOfSeverity2, cqNumberOfSeverity3, cqNumberOfSeverity4, cqNumberOfSeverity5) {
        if (!codeQualityTool) {
            return this;
        }
        else if (codeQualityTool === 'not specified') {
            this.responseBody.codeQualityTool = codeQualityTool;
            return this;
        }
        else {
            if (!cqNumberOfSeverity1 &&
                !cqNumberOfSeverity2 &&
                !cqNumberOfSeverity3 &&
                !cqNumberOfSeverity4 &&
                !cqNumberOfSeverity5) {
                this.responseBody.codeQualityTool = codeQualityTool;
                this.responseBody.cqNumberOfSeverity1 = cqNumberOfSeverity1;
                this.responseBody.cqNumberOfSeverity2 = cqNumberOfSeverity2;
                this.responseBody.cqNumberOfSeverity3 = cqNumberOfSeverity3;
                this.responseBody.cqNumberOfSeverity4 = cqNumberOfSeverity4;
                this.responseBody.cqNumberOfSeverity5 = cqNumberOfSeverity5;
            }
            else {
                this.responseBody.codeQualityTool = codeQualityTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
            }
            return this;
        }
    }
    setSastTool(sastTool, sastNumberOfSeverity1, sastNumberOfSeverity2, sastNumberOfSeverity3) {
        if (!sastTool) {
            return this;
        }
        else if (sastTool === 'not specified') {
            this.responseBody.sastTool = sastTool;
            return this;
        }
        else {
            if (!sastNumberOfSeverity3 && !sastNumberOfSeverity2 && !sastNumberOfSeverity1) {
                this.responseBody.sastTool = sastTool;
                this.responseBody.sastNumberOfSeverity3 = sastNumberOfSeverity3;
                this.responseBody.sastNumberOfSeverity2 = sastNumberOfSeverity2;
                this.responseBody.sastNumberOfSeverity1 = sastNumberOfSeverity1;
            }
            else {
                this.responseBody.sastTool = sastTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
            }
            return this;
        }
    }
    build() {
        return this.responseBody;
    }
}
exports.ResponseBodyBuilder = ResponseBodyBuilder;
