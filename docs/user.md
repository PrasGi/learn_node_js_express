# User API

## Register

Endpoint : POST /api/users

Request body :

```json
{
  "email": "pzn@gmail.com",
  "password": "password",
  "name": "pzn"
}
```

Response body success :

```json
{
  "status_code": 200,
  "message": "Registration successful",
  "data": {
    "name": "pzn",
    "email": "pzn@gmail.com"
  }
}
```

Response body failed :

```json
{
  "status_code": 400,
  "message": "Registration failed",
  "errors": "Email already registered"
}
```

## Login

Endpoint : POST /api/users/login

Request body :

```json
{
  "email": "pzn@gmail.com",
  "password": "password"
}
```

Response body success :

```json
{
  "status_code": 200,
  "message": "Login successfuly",
  "data": {
    "token": "uniqe-token"
  }
}
```

Response body failed :

```json
{
  "status_code": 400,
  "message": "Login failed",
  "errors": "Email password incorrect"
}
```

## Update

Endpoint : PATCH /api/users

Headers :

- Authorization : token

Request body :

```json
{
  "email": "pzn@gmail.com", // oprional
  "password": "password", // optional
  "name": "pzn" // optional
}
```

Response body success :

```json
{
  "status_code": 200,
  "message": "Update data successful",
  "data": {
    "name": "pzn",
    "email": "pzn@gmail.com"
  }
}
```

Response body failed :

```json
{
  "status_code": 400,
  "message": "Update data failed",
  "errors": "Name lenght max 100"
}
```

## Get user data

Endpoint : GET /api/users

Headers :

- Authorization : token

Response body success :

```json
{
  "status_code": 200,
  "message": "Get data successful",
  "data": {
    "name": "pzn",
    "email": "pzn@gmail.com"
  }
}
```

Response body failed :

```json
{
  "status_code": 400,
  "message": "Get data failed",
  "errors": "Unauthorized"
}
```

## Logout

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response body success :

```json
{
  "status_code": 200,
  "message": "Logout successful"
}
```

Response body failed :

```json
{
  "status_code": 400,
  "message": "Logout failed",
  "errors": "Unauthorized"
}
```
