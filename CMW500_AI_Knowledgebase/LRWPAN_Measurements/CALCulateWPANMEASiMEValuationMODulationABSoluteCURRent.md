# CALCulateWPANMEASiMEValuationMODulationABSoluteCURRent

Module: LRWPAN Measurements
Source: 41318eca59b442b9.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Modulation Measurement Results
 > 
CALCulate:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:CURRent?
CALCulate:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:CURRent? 
CALCulate:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:AVERage? 
CALCulate:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:MAXimum? 
CALCulate:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:SDEViation? 
FETCh:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:CURRent? 
FETCh:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:AVERage? 
FETCh:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:MAXimum? 
FETCh:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:SDEViation? 
READ:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:CURRent? 
READ:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:AVERage? 
READ:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:MAXimum? 
READ:WPAN:MEAS<i>:MEValuation:MODulation:ABSolute:SDEViation? 
Return the current, average, maximum and standard deviation single value results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_OutOfTol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count (
CONFigure:
​
WPAN:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
MODulation
) exceeding the specified limits, see 
"Modulation Limits"
.
Range: 
0 %  to  100 %
<3_AveragePower>
Average burst power
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<4_SymbolRateErr>
Symbol rate error
Range: 
-1000 ppm  to  1000 ppm
Default unit: 
ppm
<5_FreqTolerance>
Frequency accuracy
Range: 
-1000 ppm  to  1000 ppm
Default unit: 
ppm
<6_FreqAccuracy>
Frequency accuracy
Range: 
-1 MHz  to  1 MHz
Default unit: 
Hz
<7_RMS_EVM_PS> <8_Peak_EVM_PS>
Absolute error vector magnitude within PSDU portion
Default unit: 
%
<9_RMS_EVM_SP> <10_Peak_EVM_SP>
Absolute error vector magnitude within SHR + PHR portion
Default unit: 
%
<11_RMS_EVM_PP> <12_Peak_EVM_PP>
Overall absolute error vector magnitude for complete PPDU
Default unit: 
%
<13_LoLeakage>
Local oscillator leakage
Range: 
-99.99 dBW  to  99.99 dBW
Default unit: 
dBW
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