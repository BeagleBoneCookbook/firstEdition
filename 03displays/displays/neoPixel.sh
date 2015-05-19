#!/bin/sh
# Here's what you do to install the neoPixel driver
# Disable the HDMI to gain access to the PRU pins
sed -i '/cape_disable=capemgr.disable_partno=BB-BONELT-HDMI,BB-BONELT-HDMIN$/ \
            s/^#//' /boot/uEnv.txt
reboot
# Clone and build the code
cd
git clone -b opc-server https://github.com/jadonk/LEDscape.git
cd LEDscape
make
cd
git clone https://github.com/jadonk/openpixelcontrol.git
# Load and configure the kernel module, pins and LEDscape daemon
config-pin overlay BB-OPC-EX
modprobe uio_pruss
./LEDscape/run-ledscape &
# Run an example Python script
./openpixelcontrol/python_clients/example.py
