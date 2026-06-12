# CALCulateWCDMaMEASiOLPControl

Module: WCDMA Measurements
Source: 7bd8552543744b5f.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA DPCCH Open Loop Power Measurement
 > 
Command Reference
 > 
DPCCH Open Loop Power Measurement Commands
 > 
Results
 > 
CALCulate:WCDMa:MEAS<i>:OLPControl?
CALCulate:WCDMa:MEAS<i>:OLPControl? 
FETCh:WCDMa:MEAS<i>:OLPControl? 
READ:WCDMa:MEAS<i>:OLPControl? 
Return the single value results for open loop power control measurements.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<UEPwrC1>
UE power of carrier one during measurement of the ramp up of carrier two
Range: 
-100 dBm  to  100 dBm
<OLPC1>
UE power in DPCCH power control preamble of carrier one during measurement of the ramp up of carrier one
Range: 
-100 dBm  to  100 dBm
<SlotNoC1>
Slot where the power ramp up of carrier one has been detected
Range: 
0 slots  to  14 slots
<OLPC2>
UE power in DPCCH power control preamble of carrier two during measurement of the ramp up of carrier two
Range: 
-100 dBm  to  100 dBm
<SlotNoC2>
Slot where the power ramp up of carrier two has been detected
Range: 
0 slots  to  14 slots
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top