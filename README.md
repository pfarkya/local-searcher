# local-searcher

API for the front ends

## POST /add_user
```
Use for registration email is primary key

request :- {method:"POST", url:'/add_user', body:{email:'<>', password:'<>'}}

if no user there response :- {_id:'<>'}
if user there then response :- {message:'already a user'}
```

## POST /login
```
Use for registration email is primary key

request :- {method:"POST", url:'/login', body:{email:'<>', password:'<>'}}

if user exist and password also correct then response is :- 200 {_id:'<>'}
if user exist and password also wrong then response is :- 401 {message:'Invalid password'}
if user not exist then response is :- 404 {message:'no user found'}
```

## GET /logout
```
destroy the session
```
