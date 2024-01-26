#!/bin/bash

mkdir -p ./data

for i in {1..30}
do
  dd if=/dev/urandom of=./data/$i.txt bs=1M count=100
done
