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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComplianceStateService_1 = require("./lib/ComplianceStateService");
const JsonService_1 = require("./lib/JsonService");
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
function runUpdateComplianceStateTask() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //Fix these
            const codeRepositoryName = github.context.repo.repo;
            console.log('DEBUG: codeRepositoryName: ' + codeRepositoryName);
            const repositoryId = core.getInput('github.repository_id');
            console.log('DEBUG: repositoryId: ' + repositoryId);
            const subscriptionId = core.getInput('subscriptionId');
            console.log('DEBUG: subscriptionId: true');
            const cydigConfigPath = core.getInput('cydigConfigPath'); //Need both string?
            const cydigConfig = (0, JsonService_1.getContentOfFile)(cydigConfigPath);
            console.log('DEBUG: cydigConfig: ' + cydigConfig);
            const teamName = cydigConfig.teamName;
            console.log('DEBUG: teamName: ' + teamName);
            if (!teamName) {
                throw new Error('You need to enter a team name as a input parameter or in your cydig config file');
            }
            else if (teamName === 'name-of-your-team') {
                throw new Error('Invalid team name. (Placeholder values are not allowed). Please update the cydigConfig with a valid team name.');
            }
            const complianceStateService = new ComplianceStateService_1.ComplianceStateService();
            yield complianceStateService.createAndSendComplianceState(teamName, repositoryId, codeRepositoryName, subscriptionId);
        }
        catch (error) {
            // Fail the workflow run if an error occurs
            core.setFailed(error);
        }
    });
}
runUpdateComplianceStateTask();
