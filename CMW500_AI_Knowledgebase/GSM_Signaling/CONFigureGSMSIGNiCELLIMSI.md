# CONFigureGSMSIGNiCELLIMSI

Module: GSM Signaling
Source: 8bb1c6e9bb2348e1.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
MS Identity
 > 
CONFigure:GSM:SIGN<i>:CELL:IMSI
CONFigure:GSM:SIGN<i>:CELL:IMSI 
<MCC>, <MNC>, <MSIN>
Defines the default IMSI which is used to set up the connection if the mobile does not initiate a location update. See also 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CELL:
​
LUPDate
.
Parameters:
<MCC>
Range: 
0  to  999
*RST:
001
<MNC>
Range: 
01 to 99 (2-digit MNC) or 001 to 999 (3-digit MNC)
*RST:
01
<MSIN>
Range: 
0 to 9999999999 (2-digit MNC) or 0 to 999999999 (3-digit MNC)
*RST:
1000000095
Example: 
See 
"Configuring Network and MS Identities"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"MCC MNC MSIN"
Top