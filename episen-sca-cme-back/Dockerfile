FROM maven:3.5.4-jdk-8-alpine as maven
COPY ./pom.xml ./pom.xml
COPY ./src ./src
RUN mvn package

FROM openjdk:8-jdk-alpine
COPY --from=maven target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
LABEL version="0.1"
LABEL release-date="2020-04-05"
