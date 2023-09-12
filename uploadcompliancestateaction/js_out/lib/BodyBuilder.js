'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.BodyBuilder = void 0;
const UrlBuilder_1 = require('./UrlBuilder');
const ResponseBodyBuilder_1 = require('./ResponseBodyBuilder');
const UrlBodyBuilder_1 = require('./UrlBodyBuilder');
const core = __importStar(require('@actions/core'));
let urls = '';
class BodyBuilder {
  createBody(teamName, repositoryId, codeRepositoryName, subscriptionId) {
    let devopsOrgName = core.getInput('System.TeamFoundationCollectionUri');
    const teamProjectName = core.getInput('System.TeamProject');
    const allowedLocationPolicy = core.getInput('allowedLocationPolicy');
    const secureScore = core.getInput('secureScore');
    const numberOfDeployedVMs = core.getInput('numberOfDeployedVMs');
    const threatModelingDate = core.getInput('threatModelingDate');
    const scaTool = core.getInput('scaTool');
    const sastTool = core.getInput('sastTool');
    const pentestDate = core.getInput('pentestDate');
    const codeQualityTool = core.getInput('codeQualityTool');
    const numberOfExposedSecrets = core.getInput('numberOfExposedSecrets');
    const numberOfReviewers = core.getInput('numberOfReviewers');
    const branchPolicyUpdateDate = core.getInput('branchPolicyUpdateDate');
    const branchPolicyUpdateEmail = core.getInput('branchPolicyUpdateEmail');
    const compliantResources = core.getInput('compliantResources');
    const nonCompliantResources = core.getInput('nonCompliantResources');
    const scaNumberOfSeverity1 = core.getInput('SCAnumberOfSeverity1');
    const scaNumberOfSeverity2 = core.getInput('SCAnumberOfSeverity2');
    const scaNumberOfSeverity3 = core.getInput('SCAnumberOfSeverity3');
    const scaNumberOfSeverity4 = core.getInput('SCAnumberOfSeverity4');
    const cqNumberOfSeverity1 = core.getInput('CQnumberOfSeverity1');
    const cqNumberOfSeverity2 = core.getInput('CQnumberOfSeverity2');
    const cqNumberOfSeverity3 = core.getInput('CQnumberOfSeverity3');
    const cqNumberOfSeverity4 = core.getInput('CQnumberOfSeverity4');
    const cqNumberOfSeverity5 = core.getInput('CQnumberOfSeverity5');
    const sastNumberOfSeverity1 = core.getInput('SASTnumberOfSeverity1');
    const sastNumberOfSeverity2 = core.getInput('SASTnumberOfSeverity2');
    const sastNumberOfSeverity3 = core.getInput('SASTnumberOfSeverity3');
    const tmNumberOfActiveTickets = core.getInput('tmNumberOfActiveTickets');
    const tmNumberOfClosedTickets = core.getInput('tmNumberOfClosedTickets');
    const ptNumberOfActiveTickets = core.getInput('ptNumberOfActiveTickets');
    const ptNumberOfClosedTickets = core.getInput('ptNumberOfClosedTickets');
    const numUserInProdSeverity1 = core.getInput('numUserInProdSeverity1');
    const numUserInProdSeverity2 = core.getInput('numUserInProdSeverity2');
    const numUserInProdSeverity3 = core.getInput('numUserInProdSeverity3');
    devopsOrgName = this.splitUrl(devopsOrgName);
    //For printing urls in the pipeline
    const urlBody = new UrlBodyBuilder_1.UrlBodyBuilder()
      .setThreatModelingDate(threatModelingDate)
      .setNumberOfReviewers(numberOfReviewers)
      .setNumberOfExposedSecrets(numberOfExposedSecrets)
      .setCodeQualityTool(codeQualityTool)
      .setScaTool(scaTool)
      .setSastTool(sastTool)
      .setSecureScore(secureScore)
      .setAllowedLocationPolicy(allowedLocationPolicy)
      .setNumberOfHumansInSubscription(numUserInProdSeverity1, numUserInProdSeverity2, numUserInProdSeverity3)
      .setNumberOfDeployedVMs(numberOfDeployedVMs)
      .setPentestDate(pentestDate)
      .build();
    urls = UrlBuilder_1.UrlBuilder.createUrl(
      // eslint-disable-line
      teamName,
      devopsOrgName,
      teamProjectName,
      codeRepositoryName,
      repositoryId,
      subscriptionId,
      urlBody,
    );
    const responseBody = new ResponseBodyBuilder_1.ResponseBodyBuilder()
      .setTeamName(teamName)
      .setTeamProjectName(teamProjectName)
      .setCodeRepositoryName(codeRepositoryName)
      .setSubscriptionId(subscriptionId)
      .setThreatModelingDate(threatModelingDate, tmNumberOfActiveTickets, tmNumberOfClosedTickets)
      .setNumberOfReviewers(numberOfReviewers, branchPolicyUpdateDate, branchPolicyUpdateEmail)
      .setScaTool(scaTool, scaNumberOfSeverity1, scaNumberOfSeverity2, scaNumberOfSeverity3, scaNumberOfSeverity4)
      .setSastTool(sastTool, sastNumberOfSeverity1, sastNumberOfSeverity2, sastNumberOfSeverity3)
      .setSecureScore(secureScore)
      .setAllowedLocationPolicy(allowedLocationPolicy, compliantResources, nonCompliantResources)
      .setNumberOfHumansInSubscription(numUserInProdSeverity1, numUserInProdSeverity2, numUserInProdSeverity3)
      .setPentestDate(pentestDate, ptNumberOfActiveTickets, ptNumberOfClosedTickets)
      .setNumberOfDeployedVMs(numberOfDeployedVMs)
      .setNumberOfExposedSecrets(numberOfExposedSecrets)
      .setCodeQualityTool(
        codeQualityTool,
        cqNumberOfSeverity1,
        cqNumberOfSeverity2,
        cqNumberOfSeverity3,
        cqNumberOfSeverity4,
        cqNumberOfSeverity5,
      )
      .build();
    return responseBody;
  }
  splitUrl(devopsOrgName) {
    if (typeof devopsOrgName === 'string') {
      const splitted = devopsOrgName.split('/');
      devopsOrgName = splitted[splitted.length - 2];
    } else {
      core.setFailed('devopsOrgName is undefined, should be string');
    }
    return devopsOrgName;
  }
  getUrls() {
    return urls;
  }
}
exports.BodyBuilder = BodyBuilder;
