#!/bin/sh
if [ -z "$1" ]; then
   echo "please provide START|STOP|STATUS option"
   exit 1
fi

if [[ $1 == "START" ]]
  then a=$(pgrep bash monitoring.sh)
  if [[ -z "$a" ]];
    then bash monitoring.sh &
    a=$(pgrep bash monitoring.sh)
  fi
  echo $a
fi

if [[ $1 == "STOP" ]]
  then a=$(pgrep bash monitoring.sh)
  if [[ -nz "$a" ]];
    then
      pkill -9 bash monitoring.sh
      rm report.csv
  fi
fi

if [[ $1 == "STATUS" ]]
  then a=$(pgrep bash bash_create_csv.sh)
  if [[ -z "$a" ]];
    then echo 'stoped'
  else
    echo 'running'
  fi
fi
