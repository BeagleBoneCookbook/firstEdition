#!/bin/bash
# Compile it
dtc -O dtb -o BB-W1-00A0.dtbo -b 0 -@ BB-W1-00A0.dts
# Copy it
cp BB-W1-00A0.dtbo /lib/firmware/
# Enable it:
echo BB-W1 > /sys/devices/bone_capemgr.*/slots
