# CALCulateWCDMaMEASiNBMEValuationMODulationCURRent

Module: WCDMA NodeB Measurements
Source: c84ec180d961431d.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:MODulation:CURRent?
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:MODulation:CURRent? 
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:MODulation:AVERage? 
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:MODulation:MAXimum? 
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:MODulation:SDEViation? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:MODulation:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:MODulation:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:MODulation:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:MODulation:SDEViation? 
READ:WCDMa:MEAS<i>:NB:MEValuation:MODulation:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:MODulation:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:MODulation:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:MODulation:SDEViation? 
Return the current, average, maximum and standard deviation single value results.
See also 
"Detailed Views: TX Measurement"
.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_EVMrms>
Error vector magnitude RMS value
Range: 
0 % to 100 %
Default unit: 
%
<3_EVMpeak>
Error vector magnitude peak value
Range: 
0 %  to  100 %
Default unit: 
%
<4_MagErrorRMS>
Magnitude error RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<5_MagErrorPeak>
Magnitude error peak value
Range: 
-100 %  to  100 %
Default unit: 
%
<6_PhErrorRMS> <7_PhErrorPeak>
Phase error RMS and peak value
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<8_IQoffset>
I/Q origin offset
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<9_IQimbalance>
I/Q imbalance
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<10_CarrFreqErr>
Carrier frequency error
Range: 
-1 MHz  to  1 MHz
Default unit: 
Hz
<11_NBpower>
NodeB power
Range: 
-100 dBm  to  100 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top