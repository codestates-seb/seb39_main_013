FROM openjdk:11-jre-slim
LABEL maintainer="kws3363@gmail.com"
EXPOSE 8080
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]