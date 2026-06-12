# CONFigureWCDMaSIGNiULPRAChPREambleSIGNature

Module: WCDMA Measurements
Source: 2357c8dfd9104703.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for PRACH Measurement
 > 
CONFigure:WCDMa:SIGN<i>:UL:PRACh:PREamble:SIGNature
CONFigure:WCDMa:SIGN<i>:UL:PRACh:PREamble:SIGNature 
<Signature>
Specifies which of the 16 signatures defined by 3GPP TS 25.213 are available and associated with the PRACH. The information is coded in a 16-bit number. The bits from left to right indicate the availability of signature 15 to signature 0 (0=not available, 1=available).
Parameters:
<Signature>
Range: 
#B0000000000000000  to  #B1111111111111111
*RST:
#B1111111111111111
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KS410
Manual operation: 
See 
"Preamble Signature"
Top