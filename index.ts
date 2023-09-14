import { ComplianceStateService } from './lib/ComplianceStateService';
import { getContentOfFile } from './lib/JsonService';
import { CyDigConfig } from './lib/types/CyDigConfig';
import * as core from '@actions/core';
import * as github from '@actions/github';

async function runUpdateComplianceStateTask(): Promise<void> {
  try {
    //Fix these
    const codeRepositoryName: string = github.context.repo.repo;
    console.log('DEBUG: codeRepositoryName: ' + codeRepositoryName);
    const repositoryId: string = core.getInput('github.repository_id');
    console.log('DEBUG: repositoryId: ' + repositoryId);
    const subscriptionId: string = core.getInput('subscriptionId');
    console.log('DEBUG: subscriptionId: true');

    const cydigConfigPath: string = core.getInput('cydigConfigPath'); //Need both string?
    const cydigConfig: CyDigConfig = getContentOfFile(cydigConfigPath);
    console.log('DEBUG: cydigConfig: ' + cydigConfig);
    const teamName: string = cydigConfig.teamName;
    console.log('DEBUG: teamName: ' + teamName);

    if (!teamName) {
      throw new Error('You need to enter a team name as a input parameter or in your cydig config file');
    } else if (teamName === 'name-of-your-team') {
      throw new Error(
        'Invalid team name. (Placeholder values are not allowed). Please update the cydigConfig with a valid team name.'
      );
    }

    // const credentials: DefaultAzureCredential = new DefaultAzureCredential();
    const complianceStateService: ComplianceStateService = new ComplianceStateService();
    await complianceStateService.createAndSendComplianceState(
      teamName,
      repositoryId,
      codeRepositoryName,
      subscriptionId
    );
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error);
  }
}

runUpdateComplianceStateTask();
