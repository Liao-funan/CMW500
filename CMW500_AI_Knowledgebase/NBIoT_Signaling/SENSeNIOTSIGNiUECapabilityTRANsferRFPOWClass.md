# SENSeNIOTSIGNiUECapabilityTRANsferRFPOWClass

Module: NBIoT Signaling
Source: 936e9fa0c2814b53.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
SENSe:NIOT:SIGN<i>:UECapability:TRANsfer:RF:POWClass?
SENSe:NIOT:SIGN<i>:UECapability:TRANsfer:RF:POWClass? 
Returns whether the UE supports a power class with 20 dBm.
The information is returned per supported band. The values have the same order as the bands returned by the command 
SENSe:
​
NIOT:
​
SIGN<i>:
​
UECapability:
​
TRANsfer:
​
RF:
​
BANDs?
.
Return values: 
<PowerClass>
NO |
 
 YES
Comma-separated list of values, one value per supported band
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Supported Bands"
Top