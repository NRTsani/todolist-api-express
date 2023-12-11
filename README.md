# TodoList API Documentation
For Testing Purpose

Todo List API Services using Express JS

**Important Note:** This API is designed to be interacted with using tools like Postman, as there is currently no graphical user interface available.

## Register User

- **Method:** `POST`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/auth/register`
- **Body (raw JSON):**

```
"first_name": "your_firstname",
"last_name": "your_name",
"email": "your_email@example.com",
"password": "your_password"
```

## Login

- **Method:** `POST`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/auth/login`
- **Body (raw JSON):**

```
"email": "your_email@example.com",
"password": "your_password"
```

**Note:**
 Make sure to include the given Bearer token after login in the Authorization header for authentication to accessing all the endpoint below.

## Create Todo

- **Method:** `POST`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks` 
- **Body (raw JSON):**

```
"user_id": "your_user_id",
"description": "Your new task description"
```

later the user_id can be taken from JWT

## Get All Todos

- **Method:** `GET`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks`

## Get Todo by ID

- **Method:** `GET`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks/:id`
- Replace `:id` with the ID of the desired task.

## Update Todo

- **Method:** `PUT`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks/:id`
- Replace `:id` with the ID of the task you want to update.
- **Body (raw JSON):**

```
"status": "completed/active",
"description": "Your updated task description"
```

## Delete Todo

- **Method:** `DELETE`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks/:id`
- Replace `:id` with the ID of the todo to be deleted.

## Delete All Todos

- **Method:** `DELETE`
- **URL:** `https://gentle-pear-lemming.cyclic.app/api/v1/tasks/`

**Note:** Replace placeholders like `your_user_id`, `your_username`, `your_password`, `your_email@example.com`, and `:id` with actual values.

If you have any questions or need assistance, don't hesitate to reach out.


## Author

- [Naufal] (nrtsani@gmail.com)


