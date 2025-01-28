# Economy Bot

An example economy bot to manage virtual economies.

## Running the Bot

To run the bot, use the following command:

```sh
docker compose up
```

## Configuration

### MongoDB Environment Variables

Create a file named `.mongodb.env` with the following content:

```env
MONGO_INITDB_ROOT_USERNAME=example_username
MONGO_INITDB_ROOT_PASSWORD=example_password
```

### Bot Environment Variables

Create a file named `.env` with the following content:

```env
TOKEN=example_token
MONGO=mongodb://example_username:example_password@db:27017/db?authSource=admin
```

Ensure that the values are replaced with your actual credentials.
