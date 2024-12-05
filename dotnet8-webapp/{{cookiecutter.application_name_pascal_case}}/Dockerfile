### STAGE 1: Build frontend ###

# We label our stage as 'builder'
FROM node:22-alpine as build-frontend

ARG environment

COPY package.json yarn.lock ./

## Storing node modules on a separate layer will prevent unnecessary yarn installs at each build
RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

### STAGE 2: Build BFF ###
FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build-bff
LABEL maintainer="elvia@elvia.no"

WORKDIR /app

COPY bff bff
RUN dotnet publish ./bff/bff.csproj -o ./out -c Release

### STAGE 3: Runtime ###
FROM mcr.microsoft.com/dotnet/aspnet:8.0
LABEL maintainer="elvia@elvia.no"

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends util-linux=2.38.1-5+deb12u1 \
    && apt-get autoremove \
    && apt-get autoclean

RUN addgroup application-group --gid 1001 \
    && adduser application-user --uid 1001 \
        --ingroup application-group \
        --disabled-password

WORKDIR /app
COPY --from=build-bff /app/out .
COPY --from=build-frontend /app/dist/ ./wwwroot
RUN chown --recursive application-user .
USER application-user
EXPOSE 8080
ENTRYPOINT ["dotnet", "{{cookiecutter.application_name_pascal_case}}.dll"]
