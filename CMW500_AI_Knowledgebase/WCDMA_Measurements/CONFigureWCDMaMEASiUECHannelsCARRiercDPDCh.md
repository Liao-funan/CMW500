# CONFigureWCDMaMEASiUECHannelsCARRiercDPDCh

Module: WCDMA Measurements
Source: 2b84f94510b84e01.htm

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
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:DPDCh
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:DPDCh 
<Enable>, <BetaFactor>, <SpreadingFactor>
Specifies the presence of a DPDCH in the uplink signal and the beta factor and spreading factor of the channel.
For the combined signal path scenario, use:
Beta factor setting:
–
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
PDATa<no>
–
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
RMC<no>
–
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
VIDeo
–
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
VOICe
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
0  to  15
*RST:
15
<SpreadingFactor>
Range: 
2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
*RST:
64
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