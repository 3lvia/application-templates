FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build
LABEL maintainer="elvia@elvia.no"

WORKDIR /app
COPY . .
RUN dotnet restore \
    ./{{cookiecutter.application_name_pascal_case}}.csproj \
    && dotnet publish \
    ./{{cookiecutter.application_name_pascal_case}}.csproj \
    --configuration Release \
    --output ./out


FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS runtime
LABEL maintainer="elvia@elvia.no"

RUN addgroup application-group --gid 1001 \
    && adduser application-user --uid 1001 \
    --ingroup application-group \
    --disabled-password

WORKDIR /app
EXPOSE 8080
COPY --from=build /app/out .
RUN chown --recursive application-user .
USER application-user
EXPOSE 8080
ENTRYPOINT ["dotnet", "{{cookiecutter.application_name_pascal_case}}.dll"]