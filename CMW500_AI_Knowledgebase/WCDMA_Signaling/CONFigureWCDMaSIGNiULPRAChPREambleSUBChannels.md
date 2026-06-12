# CONFigureWCDMaSIGNiULPRAChPREambleSUBChannels

Module: WCDMA Signaling
Source: d5027101e54401.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Uplink Settings
 > 
Open Loop Power Control and PRACH Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:PRACh:PREamble:SUBChannels
CONFigure:WCDMa:SIGN<i>:UL:PRACh:PREamble:SUBChannels 
<SubChannels>
Specifies which of the 12 PRACH subchannels are available. The information is coded in a 12-bit number where the bits from left to right indicate the availability of subchannel 11 to subchannel 0 (0=not available, 1=available).
The default format is decimal, but you can also enter binary numbers (#B000000000000 to #B111111111111).
Parameters:
<SubChannels>
Range: 
#B000000000000  to  #B111111111111
*RST:
#B000000000001
Example: 
See 
"Configuring Physical Channel UL Settings"
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KS410
Manual operation: 
See 
"Preamble Subchannels"
Top