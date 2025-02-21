export class UrlBuilder {
    private urlDashboard: string;
    private urlBadgeService: string;
    private source: string;

    constructor() {
        this.urlDashboard = process.env?.urlDashboard ? process.env?.urlDashboard : 'https://cydig.omegapoint.cloud/';

        this.urlBadgeService = process.env?.urlBadgeService
            ? process.env?.urlBadgeService
            : 'https://func-cydig-badge-service-prod.azurewebsites.net/api';

        this.source = 'GitHub';
    }
    public createUrl(
        teamName: string,
        teamProjectName: string,
        codeRepositoryName: string,
        subscriptionId: string,
        states: object,
    ): string | undefined {
        if (!process.env?.accessKeyBadgeService) {
            return undefined;
        }

        const accessKeyBadgeService: string = process.env.accessKeyBadgeService;

        let urls: string = '';
        let encodedURL: string;
        let singleBadgeURL: string;
        let redirectLink: string = '';

        //OP Dashboard
        encodedURL = encodeURIComponent('OP Compliance Dashboard-click here-blue');
        singleBadgeURL = '[![' + 'OP Compliance Dashboard' + '](https://img.shields.io/badge/' + encodedURL + ')]';
        redirectLink = '(' + this.urlDashboard + encodeURIComponent(teamName.toLowerCase()) + ')';
        urls = urls + singleBadgeURL + redirectLink + '<br/>' + '<br/>' + '\n';

        //timestamp
        encodedURL = encodeURIComponent(
            `${this.urlBadgeService}/teams/${teamName}/sources/${this.source}/projects/${teamProjectName}/repositories/${codeRepositoryName}/controls/timestamp?code=${accessKeyBadgeService}`,
        );
        singleBadgeURL = '![' + 'Timestamp' + '](https://img.shields.io/endpoint?url=' + encodedURL + ')';
        urls = urls + singleBadgeURL + '<br/>' + '<br/>' + '\n';

        for (const state of Object.keys(states)) {
            redirectLink = '';
            encodedURL = encodeURIComponent(
                `${this.urlBadgeService}/teams/${teamName}/sources/${this.source}/projects/${teamProjectName}/repositories/${codeRepositoryName}/controls/${state}?code=${accessKeyBadgeService}`,
            );
            singleBadgeURL = '[![' + state + '](https://img.shields.io/endpoint?url=' + encodedURL + ')]';

            switch (state) {
                case 'secureScore':
                    redirectLink =
                        '(https://portal.azure.com/#view/Microsoft_Azure_Security/RecommendationsBladeV2/subscriptionIds~/%5B%22' +
                        subscriptionId +
                        '%22%5D/source/SecurityPosture_ViewRecommendation)';
                    break;
                case 'allowedLocationPolicy':
                    redirectLink =
                        '(https://portal.azure.com/#view/Microsoft_Azure_Policy/PolicyMenuBlade/~/Compliance)';
                    break;
                default:
                    singleBadgeURL = '![' + state + '](https://img.shields.io/endpoint?url=' + encodedURL + ')';
                    break;
            }
            urls = urls + singleBadgeURL + redirectLink + '<br/>' + '\n';
        }
        return urls;
    }
}
