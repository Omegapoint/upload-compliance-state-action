"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceStateService = void 0;
const BodyBuilder_1 = require("./BodyBuilder");
const axios_1 = __importDefault(require("axios"));
const config_json_1 = __importDefault(require("../config.json"));
class ComplianceStateService {
    async createAndSendComplianceState(teamName, repositoryId, codeRepositoryName, subscriptionId) {
        // POST-request to Azure function
        const urlUpdate = config_json_1.default.urlUpdate;
        const bodyBuilder = new BodyBuilder_1.BodyBuilder();
        const responseBody = bodyBuilder.createBody(teamName, repositoryId, codeRepositoryName, subscriptionId);
        await axios_1.default
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
            .catch((error) => {
            console.log(error);
            throw new Error(`Request failed with status code: ${error.message}`);
            //  ${error.response.data}`);
        });
    }
}
exports.ComplianceStateService = ComplianceStateService;
//# sourceMappingURL=ComplianceStateService.js.map