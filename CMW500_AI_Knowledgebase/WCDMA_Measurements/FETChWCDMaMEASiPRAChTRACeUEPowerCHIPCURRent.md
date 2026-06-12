# FETChWCDMaMEASiPRAChTRACeUEPowerCHIPCURRent

Module: WCDMA Measurements
Source: 52b6e548c78f447a.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:UEPower:CHIP:CURRent?
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:UEPower:CHIP:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:UEPower:CHIP:CURRent? 
Return the values of the UE power vs. chip diagram.
See also 
"Detailed Views: UE Power and Power Steps"
Return values: 
<Reliability>
"Reliability Indicator"
<UEpowerChip>
Comma-separated list of 9216 values, one per chip:
2560 values before last preamble, 4096 values for preselected preamble, 2560 values after last preamble
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top