# CONFigureGSMSIGNiCONNectionCSWitchedDTXDL

Module: GSM Signaling
Source: 15802b05beb845c6.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
CS Connections (General Parameters)
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:DTX:DL
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:DTX:DL 
<Enable>, <NoDataFrames>, <SIDframes2part>
Configures the discontinuous transmission of the R&S
 
CMW.
Level values are relative to the set TCH/PDCH level, see 
"DL Reference Level"
.
Parameters:
<Enable>
OFF |
 
 ON
Enable / disable DL DTX
*RST:
OFF
<NoDataFrames>
Relative level in the DL DTX frames, where no SID frames and no SACCH frames are sent
Range: 
-40 dB  to  0 dB
*RST:
0 dB
Default unit: 
dB
<SIDframes2part>
Relative level of the second part of SID frames. This level is required for test case 3GPP 51.010-1, TC 21.1.4.2, step 64.
Range: 
-40 dB  to  0 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Configuring General CS Connection Settings"
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"DTX DL"
Top