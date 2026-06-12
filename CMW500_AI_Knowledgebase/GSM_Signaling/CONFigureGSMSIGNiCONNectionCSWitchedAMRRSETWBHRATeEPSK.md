# CONFigureGSMSIGNiCONNectionCSWitchedAMRRSETWBHRATeEPSK

Module: GSM Signaling
Source: 9b98a0997799444f.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:WB:HRATe:EPSK
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:WB:HRATe:EPSK 
<CodecMode>(3)
Configures up to three supported modes for the half-rate wideband AMR codec (8PSK modulation), i.e. assigns data rates to the modes.
The three data rates must be different from each other. They are automatically sorted in descending order so that rate (mode 3) > rate (mode 2) > rate (mode 1). You can deactivate modes (OFF) to restrict the test model to less than 3 supported modes.
Parameters:
<CodecMode>
C0660 |
 
 C0885 |
 
 C1265 |
 
 ON |
 
 OFF
Comma-separated list of 3 values: data rates for mode 3 to 1
6.6 kbit/s, 8.85 kbit/s, or 12.65 kbit/s, additional OFF (ON) disables (enables) codec mode.
*RST:
C1265, C0885, C0660
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V2.1.60
Top