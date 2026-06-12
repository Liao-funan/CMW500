# CONFigureGSMSIGNiCONNectionCSWitchedAMRRSETNBFRATeGMSK

Module: GSM Signaling
Source: 4282886e5bbb4b47.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:NB:FRATe:GMSK
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:RSET:NB:FRATe:GMSK 
<CodecMode>(4)
Configures up to four supported modes for the full-rate narrowband AMR codec (GMSK modulation), i.e. assigns data rates to the modes.
The four data rates must be different from each other. They are automatically sorted in descending order so that rate (mode 4) > rate (mode 3) > rate (mode 2) > rate (mode 1). You can deactivate modes (OFF) to restrict the test model to less than 4 supported modes.
Parameters:
<CodecMode>
C0475 |
 
 C0515 |
 
 C0590 |
 
 C0670 |
 
 C0740 |
 
 C0795 |
 
 C1020 |
 
 C1220 |
 
 ON |
 
 OFF
Comma-separated list of 4 values: data rates for mode 4 to 1
C0475 to C1220: 4.75 kBit/s to 12.2 kBit/s
Additional parameters OFF (ON) disables (enables) codec mode.
*RST:
C1220, C0795, C0590, C0475
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Rate Set"
Top