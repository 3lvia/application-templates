# {{cookiecutter.application_name}}

This is Elvia's template for a Go web API using [Gin](https://github.com/gin-gonic/gin).

## Deployment

To deploy to Kubernetes, remember to create a Kubernetes service account for you application
in your systems [Terraform repository](https://github.com/3lvia/{{cookiecutter.system_name}}-terraform).

You also need to add your repository and/or system to [this repository](https://github.com/3lvia/github-repositories-terraform)
to enable deployment from GitHub Actions.

## Running locally

```bash
go run .
```
