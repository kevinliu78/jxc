name := "jxc"

version := "1.0"  

play.Project.playJavaSettings

resolvers ++= Seq(
  //  Resolver.mavenLocal,
  "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/.m2/repository",
  "HK Nexus Releases" at "http://netwatch.pbnglobal.com:8081/nexus/content/repositories/releases/",
  "Sonatype Releases" at "http://oss.sonatype.org/content/repositories/releases/",
  "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases/"
)

libraryDependencies ++= {
Seq(
  javaJdbc,
  javaCore,
  javaJdbc,	  
  cache,
"com.typesafe.akka" %% "akka-actor" % "2.2.0",
"com.typesafe.akka" %% "akka-remote" % "2.2.0",
"com.typesafe.akka" %% "akka-testkit" % "2.2.0",
"com.nms" % "nms-message" % "1.1.5",
"com.nms" % "nms-plugin" % "1.1.5",
"com.nms" % "nms-core" % "1.1.5",
"org.apache.httpcomponents" % "httpclient" % "4.5.2",
"com.typesafe.scala-logging" %% "scala-logging-slf4j" % "2.1.2",
"redis.clients" % "jedis" % "2.9.0",
javaJpa.exclude("org.hibernate.javax.persistence", "hibernate-jpa-2.0-api"),
"org.apache.poi" % "poi-ooxml" % "3.10-FINAL",
"com.fasterxml.jackson.core" % "jackson-databind" % "2.8.8"
)     
}
