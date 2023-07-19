# Contact API

## Create contact

Endpoint : POST /api/contact

Headers :

- Authorization : token

Request body :

```json
{
  "first_name": "Prasetyo",
  "last_name": "Putra",
  "phone": "082279092168"
}
```

Response body success :

```json
{
  "status_code": 200,
  "message": "Create data successful",
  "data": {
    "1": 1,
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
