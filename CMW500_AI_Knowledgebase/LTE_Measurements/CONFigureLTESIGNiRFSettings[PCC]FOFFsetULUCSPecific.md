# CONFigureLTESIGNiRFSettings[PCC]FOFFsetULUCSPecific

Module: LTE Measurements
Source: 267807db48034868.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:FOFFset:UL:UCSPecific
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
Firmware/Software: 
V3.2.80, UL command V3.5.20
Manual operation: 
See 
"Frequency Offset"
Top