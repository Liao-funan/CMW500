# CONFigureWCDMaMEASiTPCLIMitCTFC

Module: WCDMA Measurements
Source: d5028154e52916.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:CTFC
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:CTFC 
<PowerStepLimit>, <CalcBetaFactors>[, <PowerStepSize>]
Configures a power step limit for the measurement mode "Change of TFC".
Parameters:
<PowerStepLimit>
Symmetrical tolerance value for the power step size
Range: 
0 dB  to  10 dB
*RST:
2.3 dB
Default unit: 
dB
<CalcBetaFactors>
OFF |
 
 ON
Enables or disables the automatic calculation of the expected power step size from the configured beta factors
*RST:
ON
<PowerStepSize>
Expected power step size applicable if the automatic calculation from beta factors is disabled
Range: 
0 dB  to  24 dB
*RST:
7 dB
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