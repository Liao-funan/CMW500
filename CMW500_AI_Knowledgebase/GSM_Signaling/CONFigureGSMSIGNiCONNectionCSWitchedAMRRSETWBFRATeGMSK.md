# CONFigureGSMSIGNiCONNectionCSWitchedAMRRSETWBFRATeGMSK

Module: GSM Signaling
Source: 9f3e5801e6584656.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:WB:FRATe:GMSK
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:WB:FRATe:GMSK 
<CodecMode>(3)
Configures up to three supported modes for the half-rate narrowband AMR codec (GMSK modulation), i.e. assigns data rates to the modes.
The selected data rates must be different. They are automatically sorted so that rate (mode 3) > rate (mode 2) > rate (mode 1). You can deactivate modes (OFF) to restrict the test model to less than 3 supported modes.
Parameters:
<CodecMode>
C0660 |
 
 C0885 |
 
 C1265 |
 
 ON |
 
 OFF
6.6 kbit/s, 8.85 kbit/s, 12.65 kbit/s
Comma-separated list of 3 values: data rates for mode 3 to 1
OFF (ON) disables (enables) codec mode.
*RST:
C1265, C0885, C0660
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V2.1.25
Top