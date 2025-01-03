# {{cookiecutter.application_name_pascal_case}}

This is Elvia's template for a .NET 8 web API.

## Deployment

To deploy to Kubernetes, remember to create a Kubernetes service account for you application
in your systems [Terraform repository](https://github.com/3lvia/{{cookiecutter.system_name}}-terraform).

You also need to add your repository and/or system to [this repository](https://github.com/3lvia/github-repositories-terraform)
to enable deployment from GitHub Actions.

## Running locally

```bash
dotnet run
```
