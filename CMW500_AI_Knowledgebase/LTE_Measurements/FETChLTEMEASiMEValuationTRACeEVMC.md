# FETChLTEMEASiMEValuationTRACeEVMC

Module: LTE Measurements
Source: d2bbe49d8e2e4d1c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:EVMC?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:EVMC? 
READ:LTE:MEAS<i>:MEValuation:TRACe:EVMC? 
Returns the values of the EVM vs subcarrier trace. See also 
"View EVM vs Subcarrier"
.
The number of results n equals 12 times the number of resource blocks, which depends on the channel bandwidth, see 
"Resources in Time and Frequency Domain"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM_1> ... <EVM_n>
Comma-separated list of EVM values, one value per subcarrier
For not allocated subcarriers, NCAP is returned.
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
Top