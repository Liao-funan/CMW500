# CONFigureNIOTSIGNiDLAWGN

Module: NBIoT Signaling
Source: ec3d87179de545a3.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Downlink Power Levels
 > 
CONFigure:NIOT:SIGN<i>:DL:AWGN
CONFigure:NIOT:SIGN<i>:DL:AWGN 
<AWGN>
Specifies the total level of the additional white Gaussian noise (AWGN) interferer. The unit dBm/15 kHz indicates the spectral density integrated across one subcarrier.
The range depends on several parameters. It is a subset of the range of the RS EPRE.
Parameters:
<AWGN>
Range: 
depends on many parameters
*RST:
-98 dBm/15kHz, OFF
Default unit: 
dBm/15kHz
Additional parameters: OFF | ON (disables | enables the AWGN interferer)
Example: 
See 
"Configuring DL Power Levels"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"AWGN"
Top