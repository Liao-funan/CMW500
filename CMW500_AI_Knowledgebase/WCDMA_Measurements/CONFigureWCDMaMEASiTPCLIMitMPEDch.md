# CONFigureWCDMaMEASiTPCLIMitMPEDch

Module: WCDMA Measurements
Source: 2f1c11da002a4484.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Limits
 > 
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:MPEDch
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:MPEDch 
<Enable>, <NomMaxPower>, <UpperLimit>, <LowerLimit>
Configures UE power limits for the measurement mode "Max. Power E-DCH".
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<NomMaxPower>
Nominal maximum UE power
Range: 
-47 dBm  to  34 dBm
*RST:
24 dBm
Default unit: 
dBm
<UpperLimit>
Upper limit = nominal power + this value
Range: 
0 dB  to  10 dB
*RST:
1.7 dB
Default unit: 
dB
<LowerLimit>
Lower limit = nominal power + this value
Range: 
-10 dB  to  0 dB
*RST:
-6.7 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.30
Manual operation: 
See 
"Limits"
Top