# Upload Compliance State Task

This repository contains the upload compliance state task.

## Development on already existing task (uploadcompliancestatetask)

To start development, create a branch named **feature/your-branch-name**.

Run the command below from the root.

```bash
npm install
cd name-of-folder-containing-task
npm install
```

By first running `npm install` in the root you get the linting and format rules downloaded. So, every time you make a commit, a pre-hook will run to validate the rules. If there are any violation you will se an error or a warning in the terminal. Read more [here](https://dev.azure.com/CyDig/CyDig/_git/upload-compliance-state-task?path=/LinitingAndFormat.md) To fix format warnings run the following command from the **root**:

```bash
npm run format:write
```
