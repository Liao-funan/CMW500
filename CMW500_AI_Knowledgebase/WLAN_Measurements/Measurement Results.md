# Measurement Results

Module: WLAN Measurements
Source: c1dc49a27c9c4b2a.htm

## 原始指令文档说明
WLAN Measurements
 > 
GUI Reference
 > 
Measurement Results
Measurement Results
The results of the WLAN multi-evaluation measurement are displayed in several different views.
The multi-evaluation measurement provides an overview dialog and a detailed view for each diagram in the overview. The overview dialog shows modulation, spectrum and I/Q constellation results as diagrams. A selection of statistical results is also shown. Most of the detailed views show a diagram and a statistical overview of results.
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
:WLAN:MEAS<i>:MEValuation:
. A 
TRACE
 in the remainder indicates that a measured curve is queried. Tables are queried without 
TRACE
.
Examples:
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:OBW?
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:AVERage?
For links to the relevant command reference sections, refer to the result view descriptions in 
"Measurement Results"
.
Top