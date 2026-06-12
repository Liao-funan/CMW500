# FETChWPANMEASiMEValuationTRACeEVMChipABSoluteCURRent

Module: LRWPAN Measurements
Source: 87996a83fcbb4e35.htm

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
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip:ABSolute:CURRent?
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip:ABSolute:CURRent? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip:ABSolute:AVERage? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip:ABSolute:MAXimum? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip:ABSolute:CURRent? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip:ABSolute:AVERage? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:EVMChip:ABSolute:MAXimum? 
Returns the EVM vs chip traces. One value per two chips within the PSDU is returned. Current, average and maximum traces can be retrieved.
See also: 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM>
Absolute error vector magnitude
Default unit: 
%
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top