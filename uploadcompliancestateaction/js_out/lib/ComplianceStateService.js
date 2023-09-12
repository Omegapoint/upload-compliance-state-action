'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ComplianceStateService = void 0;
const BodyBuilder_1 = require('./BodyBuilder');
const axios_1 = __importDefault(require('axios'));
const config_json_1 = __importDefault(require('../config.json'));
class ComplianceStateService {
  createAndSendComplianceState(teamName, repositoryId, codeRepositoryName, subscriptionId) {
    return __awaiter(this, void 0, void 0, function* () {
      // POST-request to Azure function
      const urlUpdate = config_json_1.default.urlUpdate;
      const bodyBuilder = new BodyBuilder_1.BodyBuilder();
      const responseBody = bodyBuilder.createBody(teamName, repositoryId, codeRepositoryName, subscriptionId);
      yield axios_1.default
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
    });
  }
}
exports.ComplianceStateService = ComplianceStateService;
