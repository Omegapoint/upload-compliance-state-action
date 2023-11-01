import { BodyBuilder } from './BodyBuilder';
import axios from 'axios';
import { RequestBody } from './RequestBody';
import * as fs from 'fs';
import * as path from 'path';
import * as core from '@actions/core';

export class ComplianceStateService {
  private updateKey: string
  private baseUrl: string
  constructor() {
    if (!process.env?.updateKey) {
      throw new Error('Could not find environment variable updateKey');
    }
    if (!process.env?.urlUpdate) {
      throw new Error('Could not find environment variable urlUpdate');
    }
    this.updateKey = process.env.updateKey;
    this.baseUrl = process.env.urlUpdate;
  }
  public async createAndSendComplianceState(
    teamName: string,
    codeRepositoryName: string,
    subscriptionId: string
  ): Promise<void> {
    const bodyBuilder: BodyBuilder = new BodyBuilder();
    const responseBody: RequestBody = bodyBuilder.createBody(
      teamName,
      codeRepositoryName,
      subscriptionId
    );

    const urlUpdate: string = `${this.baseUrl}/teams/${teamName}/repositories?code=${this.updateKey}`;

    await axios
      .post(urlUpdate, responseBody, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(() => {
        const urls: string = bodyBuilder.getUrls();
        const outputFilePath: string = path.join(__dirname, 'README_badges.txt'); // Output file in the same directory as the script
        fs.writeFileSync(outputFilePath, urls, 'utf-8');
        core.setOutput("readme-badges", urls);
        console.log(urls);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error);
        throw new Error(`Request failed with status code: ${error.message}`);
      });
  }
}
