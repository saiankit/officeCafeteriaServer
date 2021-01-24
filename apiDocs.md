##### Server Base URL : https://officecafetaria.herokuapp.com/

#### POST CREATE USER

> /users/register

Create a new user.

##### Request Body

Post the necessary fields for the API to create a new user.

```
{
  "name": "Bob Fellow",
  "organization": "QA-Office Cafetaria",
  "employeeID": "12",
  "phoneNumber": 9632014587,
  "email": "bob.fellow@gmail.com",
  "password": "bob_fellow_123"
}
```

##### 201 - User Created

```
{
  "token": "jwtToken1234",
  "registrationId": "ASD134H"
}
```

#### POST LOGIN USER

> /users/login

Login user.

##### Request Body

Post the necessary fields for the API to login user.

```
{
    "email": "bob.fellow@gmail.com",
    "password": "bob_fellow_123"
}
```

##### 201 - User Created

```
{
  "token": "jwtToken1234",
  "registrationId": "ASD134H"
}
```

#### GET ABOUT ME

> /users/me

Get Information About the User

##### Request Header
```
'x-access-token' : "jwtToken"
```

```
{
  "name": "Bob Fellow",
  "organization": "QA-Office Cafetaria",
  "employeeID": "12",
  "phoneNumber": 9632014587,
  "email": "bob.fellow@gmail.com",
  "password": "bob_fellow_123"
}
```

##### 201 - User Created

```
{
  "token": "jwtToken1234",
  "registrationId": "ASD134H"
}
```
