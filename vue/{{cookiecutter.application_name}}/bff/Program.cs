using Elvia.Configuration;
using Elvia.Elvid.Bff.UserClient;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddHashiVaultSecrets();

var config = new BffConfig(
    builder.Configuration,
    "{{cookiecutter.system_name}}",
    "{{cookiecutter.bff_client_name}}",
    EndpointConfigs: [],
    SeperateUiHostUrl: builder.Configuration.GetValue<string>("seperateUiHostUrl"),
    EnableLocalControllers: true);
builder.Services.AddElviaBff(config);

var app = builder.Build();
app.UseElviaBff();
app.Run();
