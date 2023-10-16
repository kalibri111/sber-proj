#!/bin/bash
cat > report.csv
while ( true ) do
  cur_date=$(date "+%F_%T")
  load_cpu=$(iostat -C | expand)
  IFS=$'\n' read -rd '' -a load_cpu_raw <<< "$load_cpu"
  IFS=$' ' read -rd '' -a load_cpu_arr <<< "${load_cpu_raw[2]}"
  cpu_u=${load_cpu_arr[6]}
  echo "$cur_date;cpu_u:$cpu_u%;" > report.csv
  sleep 100
done
