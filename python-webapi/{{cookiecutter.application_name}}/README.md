# {{cookiecutter.application_name}}

This is Elvia's template for a [FastAPI](https://github.com/fastapi/fastapi) application
manages as an [uv](https://github.com/astral-sh/uv) project.

Based on [uv-fastapi-example](https://github.com/astral-sh/uv-fastapi-example)
and [uv-docker-example](https://github.com/astral-sh/uv-docker-example).

## Deployment

To deploy to Kubernetes, remember to create a Kubernetes service account for you application
in your systems [Terraform repository](https://github.com/3lvia/{{cookiecutter.system_name}}-terraform).

You also need to add your repository and/or system to [this repository](https://github.com/3lvia/github-repositories-terraform)
to enable deployment from GitHub Actions.

## Running locally

Requires [Docker](https://docs.docker.com/engine/install).

```bash
docker compose up --build
```