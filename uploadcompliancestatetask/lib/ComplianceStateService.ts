import { BodyBuilder } from './BodyBuilder';
import axios from 'axios';
import config from '../config.json';
import { ResponseBody } from './ResponseBody';

export class ComplianceStateService {
  public async createAndSendComplianceState(
    teamName: string,
    repositoryId: string,
    codeRepositoryName: string,
    subscriptionId: string
  ): Promise<void> {
    // POST-request to Azure function
    const urlUpdate: string = config.urlUpdate;
    const bodyBuilder: BodyBuilder = new BodyBuilder();
    const responseBody: ResponseBody = bodyBuilder.createBody(
      teamName,
      repositoryId,
      codeRepositoryName,
      subscriptionId
    );

    await axios
      .post(urlUpdate, responseBody, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(() => {
        console.log(bodyBuilder.getUrls());
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error);
        // throw new Error(`Request failed with status code: ${error}`);
        //  ${error.response.data}`);
      });
  }
}
