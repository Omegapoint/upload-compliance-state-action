"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComplianceStateService_1 = require("./lib/ComplianceStateService");
const JsonService_1 = require("./lib/JsonService");
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
async function runUpdateComplianceStateTask() {
    try {
        //Fix these
        const codeRepositoryName = github.context.repo.repo;
        const repositoryId = core.getInput('github.repository_id');
        const subscriptionId = core.getInput('subscriptionId');
        const cydigConfigPath = core.getInput('cydigConfigPath'); //Need both string?
        const cydigConfig = (0, JsonService_1.getContentOfFile)(cydigConfigPath);
        const teamName = cydigConfig.teamName;
        if (!teamName) {
            throw new Error('You need to enter a team name as a input parameter or in your cydig config file');
        }
        else if (teamName === 'name-of-your-team') {
            throw new Error('Invalid team name. (Placeholder values are not allowed). Please update the cydigConfig with a valid team name.');
        }
        const complianceStateService = new ComplianceStateService_1.ComplianceStateService();
        await complianceStateService.createAndSendComplianceState(teamName, repositoryId, codeRepositoryName, subscriptionId);
    }
    catch (error) {
        // Fail the workflow run if an error occurs
        core.setFailed(error);
    }
}
runUpdateComplianceStateTask();
//# sourceMappingURL=index.js.map