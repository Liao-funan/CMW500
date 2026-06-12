# CALCulateNIOTMEASiMEValuationSEMaskCURRent

Module: NBIoT Measurements
Source: f29b23ff1c2f4462.htm

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
CALCulate:NIOT:MEAS<i>:MEValuation:SEMask:CURRent?
CALCulate:NIOT:MEAS<i>:MEValuation:SEMask:CURRent? 
CALCulate:NIOT:MEAS<i>:MEValuation:SEMask:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:SDEViation? 
READ:NIOT:MEAS<i>:MEValuation:SEMask:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:SEMask:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:SEMask:SDEViation? 
Return the current, average and standard deviation single value results of the spectrum emission measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for spectrum emission measurements exceeding the specified spectrum emission mask limits.
Range: 
0 %  to  100 %
<OBW>
Occupied bandwidth
Range: 
0 kHz  to  400 kHz
Default unit: 
Hz
<TXpower>
Total TX power within 400 kHz
Range: 
-100 dBm  to  55 dBm
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