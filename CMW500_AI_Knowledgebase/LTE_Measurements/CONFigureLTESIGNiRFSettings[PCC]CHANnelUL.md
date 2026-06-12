# CONFigureLTESIGNiRFSettings[PCC]CHANnelUL

Module: LTE Measurements
Source: 86476d74e63a4909.htm

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
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:CHANnel:UL
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:CHANnel:UL 
<Channel>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:CHANnel:UL 
<Channel>
Selects the UL channel number. It must be valid for the current operating band. The related DL channel number is calculated and set automatically.
By appending a Hz unit (e.g. Hz, kHz, MHz) to a setting command, you can set the channel via its center frequency (only integer numbers accepted). By appending a Hz unit to a query command, you can query the center frequency instead of the channel number.
Suffix: 
<c>
1..4
Parameters:
<Channel>
Range: 
depends on operating band
Firmware/Software: 
V1.0.15.20, SCC command V3.5.20
Manual operation: 
See 
"Band / Channel / Frequency"
Top