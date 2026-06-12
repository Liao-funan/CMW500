# CONFigureLTESIGNiRFSettings[PCC]FOFFsetDLUCSPecific

Module: LTE Signaling
Source: 32301adce1a948de.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:FOFFset:DL:UCSPecific
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:FOFFset:DL:UCSPecific 
<Enable>
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:FOFFset:UL:UCSPecific 
<Enable>
Enables or disables the usage of different frequency offset values for the individual downlink or uplink component carriers.
Parameters:
<Enable>
OFF |
 
 ON
OFF
: The configured PCC offset is also used for the SCCs. The configured SCC offsets have no effect.
ON
: You can configure the frequency offset per carrier.
*RST:
OFF
Example: 
See 
"Configuring Operating Bands and Channels"
Firmware/Software: 
V3.2.80, UL command V3.5.20
Manual operation: 
See 
"Frequency Offset"
Top