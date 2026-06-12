# CONFigureBLUetoothMEASiISIGnalPLENgthBRATe

Module: Bluetooth Measurements
Source: 4145a9d6ab534bba.htm

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
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:BRATe
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:BRATe 
<PayloadLength>(3)
Specifies the number of bytes (octets) in the payload data of the measured BR signal. The range of values depends on the packet type (
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
BRATe
).
The command requires 3 comma-separated parameters, one for each BR packet type (order: DH1, DH3, DH5).
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
BRATe
.
Parameters:
<PayloadLength>
3 payload lengths for BR packets
Range: 
0 to 27 (DH1), 0 to 183 (DH3), 0 to 339 (DH5)
*RST:
Maximum value for each packet type
Example: 
See 
"Continuous, BR and LE Measurements"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Payload Length"
Top