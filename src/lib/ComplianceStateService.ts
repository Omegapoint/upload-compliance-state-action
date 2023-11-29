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
    this.updateKey = process.env.updateKey;

    if (!process.env?.urlUpdate) {
      this.baseUrl = 'https://func-cydig-upload-comp-state-prod.azurewebsites.net/api';
      return;
    }
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
        const urls: string | undefined = bodyBuilder.getUrls();
        if (urls !== undefined || urls !== null) {
          const outputFilePath: string = path.join(__dirname, 'README_badges.txt'); // Output file in the same directory as the script
          fs.writeFileSync(outputFilePath, urls as string, 'utf-8');
          core.setOutput("readme-badges", urls);
          console.log(urls);
        }

        console.log("No access key for badges was provide, skipping step.")
        return;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error);
        throw new Error(`Request failed with status code: ${error.message}`);
      });
  }
}