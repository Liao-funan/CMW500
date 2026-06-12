# Measurement Results

Module: NBIoT Measurements
Source: 5bc0011de8e9417a.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
GUI Reference
 > 
Measurement Results
Measurement Results
The results of the NB-IoT multi-evaluation measurement are displayed in a single overview and one detailed view for each part of the overview.
Result overview
Most of the detailed views show a diagram and a statistical overview of single-slot results.
Error Vector Magnitude result view
For a detailed description of all result views, see 
"Measurement Results"
.
Query of results via remote control
All commands for result query start with 
FETCh
, 
READ
 or 
CALCulate
 and continue with 
:NIOT:MEAS<i>:MEValuation:
. A 
TRACE
 in the remainder indicates that a measured curve is queried. Bar graphs and tables are queried without 
TRACE
.
Examples:
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:MAXimum?
READ:NIOT:MEAS<i>:MEValuation:PERRor:CURRent?
CALCulate:NIOT:MEAS<i>:MEValuation:ACLR:AVERage?
For links to the relevant command reference sections, refer to the result view descriptions in 
"Measurement Results"
.
Top