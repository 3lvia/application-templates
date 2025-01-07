# {{cookiecutter.application_name}}

This is Elvia's template for a [FastAPI](https://github.com/fastapi/fastapi) application
managed as a [uv](https://github.com/astral-sh/uv) project.

Based on [uv-fastapi-example](https://github.com/astral-sh/uv-fastapi-example)
and [uv-docker-example](https://github.com/astral-sh/uv-docker-example).

## Deployment

To deploy to Kubernetes, remember to create a Kubernetes service account for you application
in your systems [Terraform repository](https://github.com/3lvia/{{cookiecutter.system_name}}-terraform).

You also need to add your repository and/or system to [this repository](https://github.com/3lvia/github-repositories-terraform)
to enable deployment from GitHub Actions.

## Running locally

```bash
uv run fastapi dev
```

### With Docker

We supply a `compose.yml` file for running the application with Docker.
However, you need to generate the actual `Dockerfile` yourself using [3lv](https://github.com/3lvia/cli).

```bash
3lv build -s {{cookiecutter.system_name}} -f pyproject.toml --generate-only {{cookiecutter.application_name}}
```

After doing this, you can run the application with Docker Compose:

```bash
docker compose up --build
```
