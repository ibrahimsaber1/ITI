#!/bin/bash

# 1st way using sourse & echo:)
source ./s1.sh

echo "using echo Value of x is: $x"

# 2nd way using sourse & printf:)

printf "using printf The value of x is: %s\n" "$x"