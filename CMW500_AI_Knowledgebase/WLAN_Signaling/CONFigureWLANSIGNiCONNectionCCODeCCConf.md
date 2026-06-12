# CONFigureWLANSIGNiCONNectionCCODeCCConf

Module: WLAN Signaling
Source: ffbc2d2b24174a44.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
General Connection Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:CCODe:CCConf
CONFigure:WLAN:SIGN<i>:CONNection:CCODe:CCConf 
<CodeDigit>, <FirstChannel>, <NbOfChannels>, <MaxTXPower>
Sets the regulatory domain information to be transmitted in beacon frames.
To enable the transmission, see 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
CCODe:
​
CCSTate
.
Parameters:
<CodeDigit>
Country code as string
*RST:
US
<FirstChannel>
First in the range of allowed channels
Range: 
0  to  255
*RST:
1
<NbOfChannels>
Number of allowed channels
Range: 
0  to  255
*RST:
13
<MaxTXPower>
Maximum transmit power
Range: 
-40 dBm  to  40 dBm
*RST:
0 dBm
Default unit: 
dBm
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Country Code"
Top