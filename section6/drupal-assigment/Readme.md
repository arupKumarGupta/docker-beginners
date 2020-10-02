# Write a docker compose file for drupal cms

* Use the drupal iamge along with postgres image
* use ports to expose drupal on 8080
* postgres password
* Drupal assumes DB is localhost -- change that
* Use Volumes to store Drupal Unique data (for postgre -- create a directory mentioned in yaml files which will later act a bind-mount)
