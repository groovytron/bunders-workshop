#!/bin/bash

composer install
bin/console --no-interaction server:run 0.0.0.0
