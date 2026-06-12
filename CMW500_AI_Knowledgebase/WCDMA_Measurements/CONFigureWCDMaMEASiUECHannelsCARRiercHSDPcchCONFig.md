# CONFigureWCDMaMEASiUECHannelsCARRiercHSDPcchCONFig

Module: WCDMA Measurements
Source: b46b50659b524e5a.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
UE Signal Info
 > 
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:HSDPcch:CONFig
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:HSDPcch:CONFig 
<Type>
Selects whether the HS-DPCCH transports an ACK, NACK or CQI and thus which set of beta factor and spreading factor values is used.
For the combined signal path scenario, use:
Beta factor setting: 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
UL:
​
GFACtor:
​
HSDPa
Setting of spreading factor via automatic configuration depending on connection configuration
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Type>
ACK |
 
 NACK |
 
 CQI
*RST:
ACK
Example: 
See 
"Specifying Basic Measurement Settings"
Firmware/Software: 
V3.0.30
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for dual carrier HSUPA
Manual operation: 
See 
"UE Channels"
Top