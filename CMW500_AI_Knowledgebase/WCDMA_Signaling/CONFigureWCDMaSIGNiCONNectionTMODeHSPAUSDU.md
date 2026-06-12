# CONFigureWCDMaSIGNiCONNectionTMODeHSPAUSDU

Module: WCDMA Signaling
Source: 0000a7399359451f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Test Mode Connection Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:HSPA:USDU
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:HSPA:USDU 
<Size>
Specifies the HSUPA UL RLC SDU size as an integer multiple of the HSDPA DL RLC SDU size of 2936 bits.
Beside the value of 72 bits, the command accepts a continuous range of values, but sets the nearest multiple of 2936:
72 | 2936 | 5872 | 8808 | 11744 | 14680 | 17616 | 20552 | 23488 | 26424 | 29360
Parameters:
<Size>
Range: 
72 bits, 2936 bits to 29360 bits
*RST:
8808
Default unit: 
bit
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
V3.2.80: range extended
Options: 
R&S CMW-KS401
Manual operation: 
See 
"HSUPA UL RLC SDU Size"
Top