# TodoList API Documentation
For Testing Purpose

Todo List API Services using Express JS

**Important Note:** This API is designed to be interacted with using tools like Postman, as there is currently no graphical user interface available.

## Register User

- **Method:** `POST`
- **URL:** `https://gentle-pear-lemming.cyclic.app/`
- **Body (raw JSON):**

```
"username": "your_username",
"password": "your_password",
"email": "your_email@example.com",
"fullname": "Your Full Name"
```

## Login

- **Method:** `POST`
- **URL:** `https://gentle-pear-lemming.cyclic.app/`
- **Body (raw JSON):**

```
"username": "your_username",
"password": "your_password",
```

## Create Todo

**Note:**
 Make sure to include the Bearer token in the Authorization header for authentication.

- **Method:** `POST`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks/` 
- **Body (raw JSON):**

```
"userId": "your_user_id",
"task": "Your new task"
```

You can use your username to fill userId

## Get All Todos

- **Method:** `GET`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks`

## Get Todo by ID

- **Method:** `GET`
- **URL:** `https://gentle-pear-lemming.cyclic.app/`
- Replace `:id` with the ID of the desired todo.

## Update Todo

- **Method:** `PUT`
- **URL:** `https://gentle-pear-lemming.cyclic.app/`
- Replace `:id` with the ID of the todo to be updated.
- **Body (raw JSON):**

```"task": "Updated task"```

## Delete Todo

- **Method:** `DELETE`
- **URL:** `https://gentle-pear-lemming.cyclic.app/`
- Replace `:id` with the ID of the todo to be deleted.

## Delete All Todos

- **Method:** `DELETE`
- **URL:** `https://gentle-pear-lemming.cyclic.app/`

**Note:** Replace placeholders like `your_user_id`, `your_username`, `your_password`, `your_email@example.com`, and `:id` with actual values.

If you have any questions or need assistance, don't hesitate to reach out.


## Author

- [Naufal] (nrtsani@gmail.com)


