
# JWT Authentication Service

## 📌 Project Overview

This project demonstrates the first step of **JWT (JSON Web Token) authentication** using Spring Boot and Spring Security.

The application provides an authentication REST API that accepts user credentials through **Basic Authentication** and generates a JWT token for the authenticated user.

---

## 🎯 Objective

The objective of this project is to understand:

* Spring Security configuration
* Basic Authentication
* Reading Authorization headers
* Generating JWT tokens
* Creating authentication REST services
* Understanding JWT structure

---

## 🛠️ Technologies Used

* Java 23
* Spring Boot
* Spring Web
* Spring Security
* JWT (JSON Web Token)
* Gradle
* IntelliJ IDEA

---

## 📂 Project Structure

```text
JWTAuthenticationService
│
├── build.gradle
├── README.md
│
└── src
    └── main
        ├── java
        │   └── com.cognizant.jwtauthenticationservice
        │       │
        │       ├── JwtAuthenticationServiceApplication.java
        │       │
        │       ├── controller
        │       │       └── AuthenticationController.java
        │       │
        │       ├── config
        │       │       └── SecurityConfig.java
        │       │
        │       └── util
        │               └── JwtUtil.java
        │
        └── resources
                └── application.properties
```

---

## 🌐 REST API Details

### Authentication Endpoint

```
GET /authenticate
```

### URL

```
http://localhost:8090/authenticate
```

### Authentication Method

Basic Authentication

Username:

```
user
```

Password:

```
pwd
```

---

## 🔑 Request

Using curl:

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

The `-u` option sends username and password using the Authorization header.

---

## 📤 Sample Response

```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

The generated token is a JWT token that can be used for authentication in future requests.

---

## ⚙️ Working Flow

### 1. Client sends credentials

The client sends:

```
Authorization: Basic <encoded username:password>
```

Example:

```
user:pwd
```

is encoded and sent in the request header.

---

### 2. Authentication Controller receives request

The controller reads the Authorization header using:

```java
@RequestHeader("Authorization")
```

The username is extracted from the received credentials.

---

### 3. JWT Token Generation

The application creates a JWT token containing:

### Header

```json
{
    "alg":"HS256"
}
```

### Payload

```json
{
    "sub":"user",
    "iat":"issued time",
    "exp":"expiration time"
}
```

### Signature

The token is signed using a secret key.

---

## 🔄 JWT Token Structure

A JWT token contains three parts:

```
Header.Payload.Signature
```

Example:

```
xxxxx.yyyyy.zzzzz
```

* Header → Algorithm information
* Payload → User details and claims
* Signature → Ensures token integrity

---

## ▶️ How to Run

### Step 1

Open the project in IntelliJ IDEA.

### Step 2

Build the Gradle project.

### Step 3

Run:

```
JwtAuthenticationServiceApplication.java
```

### Step 4

The application starts on:

```
http://localhost:8090
```

---

## 🧪 Testing

### Using Curl

Command:

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

Response:

```json
{
    "token":"generated JWT token"
}
```

---

## 📚 SME Explanation

### What happens in Authentication Controller?

When the client calls:

```
GET /authenticate
```

Spring invokes:

```java
authenticate()
```

The controller:

1. Reads Authorization header.
2. Extracts username.
3. Generates JWT token.
4. Returns token as JSON response.

---

### How are credentials read?

The credentials are received through:

```
Authorization header
```

Basic Authentication encodes:

```
username:password
```

into Base64 format.

Example:

```
user:pwd
```

---

### How is JWT generated?

The JWT utility class creates a token using:

* Username
* Issued time
* Expiration time
* Secret key
* HS256 algorithm

---

## 📸 Output Screenshot

Add your screenshot here:

```
screenshots/jwt-token-response.png
```

Screenshot should show:

```
curl request
```

or Postman response:

```json
{
 "token":"eyJhbGciOiJIUzI1NiJ9..."
}
```

---


