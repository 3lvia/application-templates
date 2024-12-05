using {{cookiecutter.application_name_pascal_case}};
using Elvia.Configuration;
using Elvia.Telemetry;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = Host.CreateApplicationBuilder(args);
builder.Configuration.AddHashiVaultSecrets();
var connectionString = builder.Configuration.EnsureHasValue("{{cookiecutter.system_name}}:kv:appinsights:{{cookiecutter.system_name}}:connection_string");
builder.Services
    .AddStandardElviaTelemetryLoggingWorkerService(new AppInsightsConnectionString(connectionString));
builder.Services.AddHostedService<Worker>();

IHost host = builder.Build();
host.Run();
