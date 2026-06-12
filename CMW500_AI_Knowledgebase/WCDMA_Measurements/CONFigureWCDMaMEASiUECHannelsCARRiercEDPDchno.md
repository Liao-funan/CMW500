# CONFigureWCDMaMEASiUECHannelsCARRiercEDPDchno

Module: WCDMA Measurements
Source: 00d3979776e14a10.htm

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
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:EDPDch<no>
CONFigure:WCDMa:MEAS<i>:UECHannels:CARRier<c>:EDPDch<no> 
<Enable>, <BetaFactor>, <SpreadingFactor>
Specifies the presence of a selected E-DPDCH (1 to 4) in the uplink signal and the beta factor and spreading factor of the channel.
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
HSUPa:
​
EDPCch
Setting of spreading factor via automatic configuration depending on connection configuration
Suffix: 
<no>
1..4
Selects the E-DPDCH
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Enable>
OFF |
 
 ON
Channel disabled | enabled
*RST:
OFF
<BetaFactor>
Range: 
5  to  5655
*RST:
168
<SpreadingFactor>
Range: 
2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
*RST:
4
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