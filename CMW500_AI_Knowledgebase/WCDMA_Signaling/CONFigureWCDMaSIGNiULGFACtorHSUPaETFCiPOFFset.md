# CONFigureWCDMaSIGNiULGFACtorHSUPaETFCiPOFFset

Module: WCDMA Signaling
Source: 6b21c97bc9da4b06.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Uplink Settings
 > 
Gain Factor Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:GFACtor:HSUPa:ETFCi:POFFset
CONFigure:WCDMa:SIGN<i>:UL:GFACtor:HSUPa:ETFCi:POFFset 
<PowerOffset>...
Specifies the power offset values of the first n pairs of reference E-TFCIs and power offsets, with n = 1 to 8.
Parameters:
<PowerOffset>
Comma-separated list of up to 8 values (30 and 31 reserved for E-TFCI boost)
Range: 
0  to  31
*RST:
4, 18, 23, 26, 27, 28, 29, 29
Example: 
See 
"Configuring Physical Channel UL Settings"
Firmware/Software: 
V3.0.20
V3.2.70: range extended for E-TFCI boost
Options: 
R&S CMW-KS401
R&S CMW-KS403 for E-TFCI boost
Manual operation: 
See 
"No of Reference E-TFCIs, Reference E-TFCI"
Top