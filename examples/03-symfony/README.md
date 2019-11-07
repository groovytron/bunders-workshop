# Symfony configuration example

This is a Symfony project with a custom Webpack configuration.

## NPM tasks

You can «npm run» the following tasks depending on your goals:

- `dev`: compiles assets in development mode *and watches for changes*
- `build-dev`: compiles assets in development mode
- `build`: compiles assets in production mode

## Configuration

If you are using a PHP version that is lower than *7.3*, run `composer update` instead of `composer install` to install the dependencies.

If you are using `apache`, run `composer require symfony/apache-pack` to put a correct `.htaccess` file in your `public` directory.
