# CONFigureWCDMaMEASiUECHannelsCARRiercHSDPcch

Module: WCDMA Measurements
Source: d2468378fadf4a75.htm

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
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:HSDPcch
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:HSDPcch 
<Enable>, <BetaFactor>, <SpreadingFactor>
Specifies the presence of an HS-DPCCH in the uplink signal and the beta factor and spreading factor of the channel.
For the HS-DPCCH three sets of beta factor and spreading factor can be configured, depending on whether it transports an ACK, NACK or CQI. This command configures/returns the values related to the currently active set.
For selection of the active set, see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
UECHannels:
​
CARRier<c>:
​
HSDPcch:
​
CONFig
.
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
<Enable>
OFF |
 
 ON
Channel disabled | enabled
*RST:
ON
<BetaFactor>
Range: 
5  to  570
*RST:
60
<SpreadingFactor>
Range: 
2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
*RST:
256
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