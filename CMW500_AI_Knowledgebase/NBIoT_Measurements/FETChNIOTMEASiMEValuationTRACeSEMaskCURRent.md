# FETChNIOTMEASiMEValuationTRACeSEMaskCURRent

Module: NBIoT Measurements
Source: 144ce81d49514191.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:SEMask:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:SEMask:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:SEMask:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:SEMask:MAXimum? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:SEMask:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:SEMask:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:SEMask:MAXimum? 
Returns the values of the spectrum emission traces. The results of the current, average and maximum traces can be retrieved.
See also 
"View Spectrum Emission Mask"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of 1067 power results
The value in the middle of the result array corresponds to the center frequency.
The test point separation between two results equals 3.75 kHz.
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
V3.5.10
Top