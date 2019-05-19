# ** Back End - Secret-Family-Recipes**
---
## What is secret-family-recipes?

#### Search and find recipes that you would like to cook that old grandma sally used to cook when you were young. 
#### Search by categories, by maker, or by recipe. With Secret-Family-Recipes you can organize and find recipes with ease . 

---
##### Heroku Deployment Link : `NONE YET`
---

Used for register and login
```js
{
  "username": "userName",
  "password": "password"
}
```
---

Used for Posting a recipe
```js
{
  "instructions": "instruction",
  "Title": "title",
  "expirationDate": "2019-04-17 12:00:00"
}
```
---

Used for Posting a Source
```js
{
  "nameOfSource": "nameOfSource",
  "recipe_ID": (points to recipe ID)
}
```
---

Used for Posting a Category
```js
{
  "Category": "Category",
}
```
---
Used for Posting a Ingredients
```js
{
  "Ingredients": "Ingredients",
}
```
---

### Users

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register          | Creates a new User to the users table in the database.                                                                                                                           |
| POST   | /login             | Checks whether the payload from the body matches with the user from the database. Returns a message and JWT token on successful login.                                           |
| GET    | /recipe             | Protected Route. Returns an array of User objects of all users.                                                                                                                  |
| GET    | /recipe/:id         | Protected Route. Returns an array of objects for the user by ID                                                                                                                  |
| DELETE | /recipe/:id         | Protected Route. Deletes a User by specific ID.                                                                                                                                  |

---

