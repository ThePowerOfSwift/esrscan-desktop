#!/bin/bash

if [[ "$TRAVIS_OS_NAME" == "osx" ]]; then
  brew update
fi
