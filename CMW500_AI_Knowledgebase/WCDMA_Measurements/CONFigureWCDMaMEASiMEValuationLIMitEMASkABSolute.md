# CONFigureWCDMaMEASiMEValuationLIMitEMASkABSolute

Module: WCDMA Measurements
Source: d11798f1911348fc.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:EMASk:ABSolute
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:EMASk:ABSolute 
<LimitG3M84>, <LimitH1MHz>, <LimitH30kHz>, <LimitHmode>
Defines absolute limits for the spectrum emission curves.
Parameters:
<LimitG3M84>
Absolute limit line G referenced to a 3.84 MHz filter
Range: 
-80 dBm  to  33 dBm
*RST:
-48.5 dBm
Default unit: 
dBm
Additional OFF | ON disables/enables the limit check using the previous/default limit values
<LimitH1MHz>
Absolute limit line H referenced to a 1 MHz or 100 kHz filter, depending on the line H mode
Range: 
-80 dBm  to  33 dBm
*RST:
-15 dBm, OFF
Default unit: 
dBm
Additional OFF | ON disables/enables the limit check using the previous/default limit values
<LimitH30kHz>
Absolute limit line H referenced to a 30 kHz filter
Range: 
-80 dBm  to  33 dBm
*RST:
-13 dBm
Additional OFF | ON disables/enables the limit check using the previous/default limit values
<LimitHmode>
A |
 
 B |
 
 C
Line H mode
*RST:
A
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top