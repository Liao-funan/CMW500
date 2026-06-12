# CONFigureNIOTMEASiMEValuationLIMitACLRUTRA

Module: NBIoT Measurements
Source: f82ed725fb8f4d17.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits Spectrum
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:ACLR:UTRA
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:ACLR:UTRA 
<RelativeLevel>, <AbsoluteLevel>
Defines a relative and absolute limit for the ACLR measured in the adjacent UTRA channel.
Parameters:
<RelativeLevel>
Range: 
-256 dB  to  256 dB
*RST:
36.2 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<AbsoluteLevel>
Range: 
-256 dBm  to  256 dBm
*RST:
-50 dBm
Default unit: 
dBm
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Top