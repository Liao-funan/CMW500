# CONFigureBLUetoothMEASiISIGnalPLENgthEDRate

Module: Bluetooth Measurements
Source: 0d2a41f29ffa4711.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:EDRate
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:EDRate 
<PayloadLength>(6)
Specifies the number of bytes (octets) in the payload data of the measured EDR signal. The range of values depends on the packet type (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
ISIGnal:
​
PTYPe:
​
EDRate
).
The command requires 6 comma-separated parameters, one for each EDR packet type (order: 2-DH1, 2-DH3, 2-DH5, 3-DH1, 3-DH3, 3-DH5).
For the combined signal path scenario, use 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PLENgth:
​
EDRate
.
Parameters:
<PayloadLength>
6 payload lengths for EDR packets
Range: 
0 to 54 (2-DH1), 0 to 367 (2-DH3), 0 to 679 (2-DH5), 0 to 83 (3-DH1), 0 to 552 (3-DH3), 0 to 1021 (3-DH5)
*RST:
Maximum value for each packet type
Example: 
See 
"Basic Input Signal Properties: EDR Packets"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Payload Length"
Top