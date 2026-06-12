# FETChLTEMEASiMEValuationTRACeSEMaskRBWkHzCURRent

Module: LTE Measurements
Source: 7b44d8120c534589.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:SEMask:RBW<kHz>:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:SEMask:RBW<kHz>:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:SEMask:RBW<kHz>:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:SEMask:RBW<kHz>:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:TRACe:SEMask:RBW<kHz>:CURRent? 
READ:LTE:MEAS<i>:MEValuation:TRACe:SEMask:RBW<kHz>:AVERage? 
READ:LTE:MEAS<i>:MEValuation:TRACe:SEMask:RBW<kHz>:MAXimum? 
Returns the values of the spectrum emission traces. Separate traces are available for the individual resolution bandwidths (<kHz>). The results of the current, average and maximum traces can be retrieved.
See also 
"View Spectrum Emission Mask"
.
Suffix: 
<kHz>
30, 50, 100, 150, 200, 1000
Resolution bandwidth in kHz
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of power results
The value in the middle of the result array corresponds to the center frequency.
The test point separation between two results depends on the resolution bandwidth, see table below.
For 
RBW100
 and greater, results are only available for frequencies with active limits using these RBWs. For other frequencies, INV is returned.
Range: 
-120 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.7.10 added RBW 50, 150, 200
RBW
Test point separation
30, 50
15 kHz
100, 150, 200
45 kHz
1000
90 kHz
Top