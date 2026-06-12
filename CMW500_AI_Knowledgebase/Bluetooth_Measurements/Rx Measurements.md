# Rx Measurements

Module: Bluetooth Measurements
Source: afaac1a2a0024378.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Rx Measurements
Rx Measurements
The Rx measurement provided by the Bluetooth measurement application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:BLUetooth:MEAS:RXQuality:...
After a 
*RST
, the measurement is switched off.
You can start the measurement using 
INIT:BLUetooth:MEAS:RXQuality
 and retrieve the results using 
FETCh:BLUetooth:MEAS:RXQuality:...?
.
The examples in this section focus on commands directly related to the Rx measurement. For general configuration of the measurement application, refer to 
"Specifying General Measurement Settings"
.
Contents
Configuring an Rx Measurement
Performing an Rx Measurement
Top