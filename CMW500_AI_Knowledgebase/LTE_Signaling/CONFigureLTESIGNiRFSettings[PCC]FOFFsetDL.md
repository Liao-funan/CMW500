# CONFigureLTESIGNiRFSettings[PCC]FOFFsetDL

Module: LTE Signaling
Source: 306b9a5da4474337.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:FOFFset:DL
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:FOFFset:DL 
<Offset>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:FOFFset:DL 
<Offset>
Specifies a positive or negative frequency offset to be added to the center frequency of the configured downlink channel.
You can use the PCC command to configure the same offset for the PCC and all SCCs. Or you can use the PCC and SCC command to configure different values. See also 
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
FOFFset:
​
DL:
​
UCSPecific
.
Suffix: 
<c>
1..4
Parameters:
<Offset>
Range: 
-100E+3 Hz  to  100E+3 Hz
*RST:
0 Hz
Default unit: 
Hz
Example: 
See 
"Configuring Operating Bands and Channels"
Firmware/Software: 
V3.2.10, SCC command V3.2.81
Manual operation: 
See 
"Frequency Offset"
Top