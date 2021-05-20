#!/bin/bash

# How to subtree
# 1. git clone <ROOT-REPO-PATH> ( optional )
# 2. git remote add <SUB-REMOTE-NAME> <SUB-REPO-NAME>
# 3. git subtree add --prefix <SUB-DIRECTORY-NAME> <SUB-REMOTE-NAME> <SUB-REPO-BRANCH-NAME>
git subtree push --prefix api-server heroku main