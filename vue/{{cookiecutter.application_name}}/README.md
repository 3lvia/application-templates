# webapp template

This is Elvia webapp template with BFF support. See https://elvia.atlassian.net/wiki/spaces/DOCELVID/pages/71594442969/Elvia+BFF+brukerklient for details on BFF.

Make sure to merge the PR created in https://github.com/3lvia/{{cookiecutter.system_name}}-terraform/pulls (and possibly https://github.com/3lvia/github-repositories-terraform/pulls).

It comes with a minimal Vue app used to demonstrate the authentication with BFF.

It is recommended to delete everything except the `Dockerfile`, and the `.github/` and `bff/` folders and start a new project, for instance for Vue you can use `npm create vue@latest`. 


## Run locally
BFF require that you trust the ASP.NET certificates for local development. See the docs:
* Windows/macOS: https://learn.microsoft.com/en-gb/aspnet/core/security/enforcing-ssl?view=aspnetcore-8.0&tabs=visual-studio%2Clinux-ubuntu#trust-the-aspnet-core-https-development-certificate-on-windows-and-macos
* WSL: https://learn.microsoft.com/en-gb/aspnet/core/security/enforcing-ssl?view=aspnetcore-8.0&tabs=visual-studio%2Clinux-ubuntu#trust-https-certificate-from-windows-subsystem-for-linux


Either start bff in your favorite IDE, or in a terminal:
```
cd bff
dotnet run
```

In a separate terminal run the frontend:
```
yarn install
yarn start
```
