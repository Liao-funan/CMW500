# CONFigureGSMSIGNiCONNectionCSWitchedAMRRSETNBHRATeGMSK

Module: GSM Signaling
Source: a55a1a7d51734d47.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:NB:HRATe:GMSK
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:NB:HRATe:GMSK 
<CodecMode>(4)
Configures up to four supported modes for the half-rate narrowband AMR codec (GMSK modulation), i.e. assigns data rates to the modes.
The selected data rates must be different. They are automatically sorted so that rate (mode 4) > rate (mode 3) > rate (mode 2) > rate (mode 1). You can deactivate modes (OFF) to restrict the test model to less than 4 supported modes.
Parameters:
<CodecMode>
C0475 |
 
 C0515 |
 
 C0590 |
 
 C0670 |
 
 C0740 |
 
 C0795 |
 
 ON |
 
 OFF
Comma-separated list of 4 values: data rates for mode 4 to 1
4.75 kbit/s, 5.15 kbit/s, 5.90 kbit/s, 6.70 kbit/s, 7.40 kbit/s, or 7.95 kbit/s, additional OFF (ON) disables (enables) codec mode.
*RST:
C0795, C0670, C0590, C0515
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V2.0.10
Top