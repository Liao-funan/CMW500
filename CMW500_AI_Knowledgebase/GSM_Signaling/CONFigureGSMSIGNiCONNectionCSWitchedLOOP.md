# CONFigureGSMSIGNiCONNectionCSWitchedLOOP

Module: GSM Signaling
Source: 97589a37b53f4984.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
CS Connections (General Parameters)
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:LOOP
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:LOOP 
<Loop>
Selects a test loop type and activates/deactivates the test loop (i.e. whether the MS is commanded to establish the test loop).
Parameters:
<Loop>
C |
 
 A |
 
 B |
 
 D |
 
 I |
 
 ON |
 
 OFF
A
: TCH loop including signaling of erased frames
B
: TCH loop without signaling of erased frames
C
: TCH burst-by-burst loop
D
: TCH loop including signaling of erased frames and unreliable frames
I
: TCH loop for inband signaling
*RST:
OFF
Additional parameters: OFF | ON (disables | enables the loop)
Example: 
See 
"Configuring General CS Connection Settings"
Firmware/Software: 
V1.0.15.0
V2.0.10: added values A, B
V3.0.20: added value I
V3.2.20: added value D
Options: 
R&S CMW-KS210 for all loop types except A and C
Manual operation: 
See 
"Loop"
Top