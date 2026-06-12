# CONFigureGSMSIGNiCONNectionCSWitchedAMRTHResholdNBFRATeGMSK

Module: GSM Signaling
Source: 010028cac26b4a0d.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:THReshold:NB:FRATe:GMSK
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:THReshold:NB:FRATe:GMSK 
<Threshold>(6)
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:THReshold:NB:HRATe:EPSK 
<Threshold>(6)
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:THReshold:NB:HRATe:GMSK 
<Threshold>(6)
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:THReshold:WB:FRATe:EPSK 
<Threshold>(6)
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:THReshold:WB:FRATe:GMSK 
<Threshold>(6)
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:THReshold:WB:HRATe:EPSK 
<Threshold>(6)
Selects the upper and lower limits for the codec mode swapping.
The threshold sequence is following: lower 4, upper 3, lower 3, upper 2, lower 2, and upper 1 threshold. Value OFF disables threshold.
Parameters:
<Threshold>
ON |
 
 OFF
0 dB to 31.5 dB
: limit of codec mode
Additional parameters OFF (ON) disables (enables) the limit.
Range: 
OFF, 0 dB to 31.5 dB
*RST:
16.5 dB
Default unit: 
dB
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Threshold"
Top