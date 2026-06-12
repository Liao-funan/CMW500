# CONFigureGSMSIGNiCONNectionCSWitchedAMRRSETWBFRATeEPSK

Module: GSM Signaling
Source: 77b4df6242db49d4.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:WB:FRATe:EPSK
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:WB:FRATe:EPSK 
<CodecMode>(4)
Configures up to four supported modes for the full-rate wideband AMR codec (8PSK modulation), i.e. assigns data rates to the modes.
The four data rates must be different from each other. They are automatically sorted in descending order so that rate (mode 4) > rate (mode 3) > rate (mode 2) > rate (mode 1). You can deactivate modes (OFF) to restrict the test model to less than 4 supported modes.
Parameters:
<CodecMode>
C0660 |
 
 C0885 |
 
 C1265 |
 
 C1585 |
 
 C2385 |
 
 ON |
 
 OFF
Comma-separated list of 4 values: data rates for mode 4 to 1
6.6 kbit/s, 8.85 kbit/s, 12.65 kbit/s, 15.85 kbit/s, or 23.85 kbit/s, additional OFF (ON) disables (enables) codec mode.
*RST:
C2385, C1585, C1265, C0660
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V2.1.60
Top