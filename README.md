# CI/CD Pipeline with React App using GitHub Actions.

Build your app to docker image, publish and deploy on DockerHub and Vercel with github actions.

This repository is for the
[CI/CD Pipeline with React App using GitHub Actions](https://sandygoody.medium.com/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f)

tutorial.

The repository contains a CI/CD Pipeline workflow which builds your app to docker image, publish and deploy on DockerHub and Vercel with github actions.


# Configuration

1. Create React App.

2. Add `Dockerfile` and `.dockerignore` file to the root of the App.

3. Deploy App to Vercel using Vercel CLI.

4. Push your project to Github repo.

5. On Github, click on Actions , create a defalut workflow using node.js template.

6. Replace default codes with the codes in the node.js.yml file.

7. Create Github Secrets.

    - REACTUSERNAME (paste json file)
    - DOCKERHUB_TOKEN
    - VERCEL_TOKEN
    - PROJECT_ID
    - VERCEL_ORG_ID

8. Refresh github to run the workflow.
