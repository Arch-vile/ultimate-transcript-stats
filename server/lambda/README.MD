
https://aws.amazon.com/blogs/compute/kotlin-and-groovy-jvm-languages-with-aws-lambda/


To build the uber jar:
lambda $ ./gradlew shadowJar

To create the lamda for first time:
aws lambda create-function \
--role $LAMBDA_ROLE \
--function-name utranscript-main \
--handler com.nakoradio.utranscript.Main::handler \
--runtime java8 \
--zip-file fileb://build/libs/utranscript-1.0-SNAPSHOT-all.jar

To update the lamda:
aws lambda update-function-code  \
--function-name utranscript-main  \
--zip-file fileb://build/libs/utranscript-1.0-SNAPSHOT-all.jar

To invoke the lambda:
aws lambda invoke \
--invocation-type RequestResponse \
--function-name utranscript-main \
--payload '{"who": "Jack" }' \
output.txt ; cat output.txt



