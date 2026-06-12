# FETChWPANMEASiMEValuationTRACeEVMChip[OFFSet]CURRent

Module: LRWPAN Measurements
Source: 3b899242b18e45e6.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Trace Results
 > 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip[:OFFSet]:CURRent?
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip[:OFFSet]:CURRent? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip[:OFFSet]:AVERage? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip[:OFFSet]:MAXimum? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip[:OFFSet]:CURRent? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip[:OFFSet]:AVERage? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip[:OFFSet]:MAXimum? 
Returns the offset EVM vs chip traces. One value per two chips within the PSDU is returned. Current, average and maximum traces can be retrieved.
See also: 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM>
Offset error vector magnitude
Default unit: 
%
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top