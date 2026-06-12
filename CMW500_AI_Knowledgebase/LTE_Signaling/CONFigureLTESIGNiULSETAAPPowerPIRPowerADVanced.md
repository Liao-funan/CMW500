# CONFigureLTESIGNiULSETAAPPowerPIRPowerADVanced

Module: LTE Signaling
Source: 30a18f5a9ce94bdb.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PIRPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PIRPower:ADVanced 
<TargetPower>
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:PIRPower:ADVanced 
<TargetPower>
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:PIRPower:ADVanced 
<TargetPower>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:PIRPower:ADVanced 
<TargetPower>
Specifies the "preambleInitialReceivedTargetPower" value, signaled to the UE if advanced UL power configuration applies.
Suffix: 
<c>
1..4
Parameters:
<TargetPower>
Range: 
-120 dBm  to  -90 dBm
Increment: 
2 dB
*RST:
-104 dBm
Default unit: 
dBm
Example: 
See 
"Configuring UL Power Control for Call Setup"
Firmware/Software: 
PCC V3.0.50, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Preamble Initial Received Target Power"
Top