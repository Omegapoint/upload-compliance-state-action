import { UrlBuilder } from './UrlBuilder';
import { ResponseBodyBuilder } from './ResponseBodyBuilder';
import { UrlBodyBuilder } from './UrlBodyBuilder';
import { UrlBody } from './UrlBody';
import { ResponseBody } from './ResponseBody';
import * as core from '@actions/core';

let urls: string = '';

export class BodyBuilder {
  createBody(teamName: string, repositoryId: string, codeRepositoryName: string, subscriptionId: string): ResponseBody {
    let devopsOrgName: string = core.getInput('System.TeamFoundationCollectionUri');
    const teamProjectName: string = core.getInput('System.TeamProject');

    const allowedLocationPolicy: string = core.getInput('allowedLocationPolicy');
    const secureScore: string = core.getInput('secureScore');
    const numberOfDeployedVMs: string = core.getInput('numberOfDeployedVMs');

    const threatModelingDate: string = core.getInput('threatModelingDate');
    const scaTool: string = core.getInput('scaTool');
    const sastTool: string = core.getInput('sastTool');
    const pentestDate: string = core.getInput('pentestDate');
    const codeQualityTool: string = core.getInput('codeQualityTool');
    const numberOfExposedSecrets: string = core.getInput('numberOfExposedSecrets');
    const numberOfReviewers: string = core.getInput('numberOfReviewers');
    const branchPolicyUpdateDate: string = core.getInput('branchPolicyUpdateDate');
    const branchPolicyUpdateEmail: string = core.getInput('branchPolicyUpdateEmail');

    const compliantResources: string = core.getInput('compliantResources');
    const nonCompliantResources: string = core.getInput('nonCompliantResources');

    const scaNumberOfSeverity1: string = core.getInput('SCAnumberOfSeverity1');
    const scaNumberOfSeverity2: string = core.getInput('SCAnumberOfSeverity2');
    const scaNumberOfSeverity3: string = core.getInput('SCAnumberOfSeverity3');
    const scaNumberOfSeverity4: string = core.getInput('SCAnumberOfSeverity4');

    const cqNumberOfSeverity1: string = core.getInput('CQnumberOfSeverity1');
    const cqNumberOfSeverity2: string = core.getInput('CQnumberOfSeverity2');
    const cqNumberOfSeverity3: string = core.getInput('CQnumberOfSeverity3');
    const cqNumberOfSeverity4: string = core.getInput('CQnumberOfSeverity4');
    const cqNumberOfSeverity5: string = core.getInput('CQnumberOfSeverity5');

    const sastNumberOfSeverity1: string = core.getInput('SASTnumberOfSeverity1');
    const sastNumberOfSeverity2: string = core.getInput('SASTnumberOfSeverity2');
    const sastNumberOfSeverity3: string = core.getInput('SASTnumberOfSeverity3');

    const tmNumberOfActiveTickets: string = core.getInput('tmNumberOfActiveTickets');
    const tmNumberOfClosedTickets: string = core.getInput('tmNumberOfClosedTickets');

    const ptNumberOfActiveTickets: string = core.getInput('ptNumberOfActiveTickets');
    const ptNumberOfClosedTickets: string = core.getInput('ptNumberOfClosedTickets');
    
    const numUserInProdSeverity1: string = core.getInput('numUserInProdSeverity1');
    const numUserInProdSeverity2: string = core.getInput('numUserInProdSeverity2');
    const numUserInProdSeverity3: string = core.getInput('numUserInProdSeverity3');
    console.log('devopsOrgName:', devopsOrgName);
    console.log('teamProjectName:', teamProjectName);
    console.log('allowedLocationPolicy:', allowedLocationPolicy);
    console.log('secureScore:', secureScore);
    console.log('numberOfDeployedVMs:', numberOfDeployedVMs);
    console.log('threatModelingDate:', threatModelingDate);
    console.log('scaTool:', scaTool);
    console.log('sastTool:', sastTool);
    console.log('pentestDate:', pentestDate);
    console.log('codeQualityTool:', codeQualityTool);
    console.log('numberOfExposedSecrets:', numberOfExposedSecrets);
    console.log('numberOfReviewers:', numberOfReviewers);
    console.log('branchPolicyUpdateDate:', branchPolicyUpdateDate);
    console.log('branchPolicyUpdateEmail:', branchPolicyUpdateEmail);
    console.log('compliantResources:', compliantResources);
    console.log('nonCompliantResources:', nonCompliantResources);
    console.log('scaNumberOfSeverity1:', scaNumberOfSeverity1);
    console.log('scaNumberOfSeverity2:', scaNumberOfSeverity2);
    console.log('scaNumberOfSeverity3:', scaNumberOfSeverity3);
    console.log('scaNumberOfSeverity4:', scaNumberOfSeverity4);
    console.log('cqNumberOfSeverity1:', cqNumberOfSeverity1);
    console.log('cqNumberOfSeverity2:', cqNumberOfSeverity2);
    console.log('cqNumberOfSeverity3:', cqNumberOfSeverity3);
    console.log('cqNumberOfSeverity4:', cqNumberOfSeverity4);
    console.log('cqNumberOfSeverity5:', cqNumberOfSeverity5);
    console.log('sastNumberOfSeverity1:', sastNumberOfSeverity1);
    console.log('sastNumberOfSeverity2:', sastNumberOfSeverity2);
    console.log('sastNumberOfSeverity3:', sastNumberOfSeverity3);
    console.log('tmNumberOfActiveTickets:', tmNumberOfActiveTickets);
    console.log('tmNumberOfClosedTickets:', tmNumberOfClosedTickets);
    console.log('ptNumberOfActiveTickets:', ptNumberOfActiveTickets);
    console.log('ptNumberOfClosedTickets:', ptNumberOfClosedTickets);
    console.log('numUserInProdSeverity1:', numUserInProdSeverity1);
    console.log('numUserInProdSeverity2:', numUserInProdSeverity2);
    console.log('numUserInProdSeverity3:', numUserInProdSeverity3);

    devopsOrgName = this.splitUrl(devopsOrgName);

    //For printing urls in the pipeline
    const urlBody: UrlBody = new UrlBodyBuilder()
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

    urls = UrlBuilder.createUrl(
      // eslint-disable-line
      teamName,
      devopsOrgName,
      teamProjectName,
      codeRepositoryName,
      repositoryId,
      subscriptionId,
      urlBody
    );

    const responseBody: ResponseBody = new ResponseBodyBuilder()
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
        cqNumberOfSeverity5
      )
      .build();
    return responseBody;
  }

  splitUrl(devopsOrgName: string): string {
    if (typeof devopsOrgName === 'string') {
      const splitted: string[] = devopsOrgName.split('/');
      devopsOrgName = splitted[splitted.length - 2];
    } else {
      core.setFailed('devopsOrgName is undefined, should be string');
    }
    return devopsOrgName;
  }
  getUrls(): string {
    return urls;
  }
}
