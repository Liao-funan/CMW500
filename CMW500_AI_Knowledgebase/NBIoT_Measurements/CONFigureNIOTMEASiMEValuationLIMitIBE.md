# CONFigureNIOTMEASiMEValuationLIMitIBE

Module: NBIoT Measurements
Source: e4b82b53eab04195.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits Modulation
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:IBE
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:IBE 
<Enable>, <Minimum>, <SCPower>, <IQImage>
Defines parameters used for calculation of an upper limit for the inband emissions, see 
"Inband Emissions Limits"
.
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the limit check
ON
: enables the limit check
*RST:
ON
<Minimum>
Range: 
-256 dB  to  256 dB
*RST:
-30 dB
Default unit: 
dB
<SCPower>
Range: 
-256 dBm  to  256 dBm
*RST:
-57 dBm
Default unit: 
dBm
<IQImage>
Range: 
-256 dB  to  256 dB
*RST:
-24.2 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Top