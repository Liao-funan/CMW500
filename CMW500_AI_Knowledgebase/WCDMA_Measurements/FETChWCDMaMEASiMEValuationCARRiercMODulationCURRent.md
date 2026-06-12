# FETChWCDMaMEASiMEValuationCARRiercMODulationCURRent

Module: WCDMA Measurements
Source: e570798d9da64803.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:SDEViation? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:CURRent? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:AVERage? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:MAXimum? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:MODulation:SDEViation? 
Return the current, average, maximum and standard deviation single value results.
The return values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each of the first 14 results listed below. The TX time alignment is only returned by 
FETCh
 and 
READ
 commands.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_EVMrms> <3_EVMpeak>
Error vector magnitude RMS and peak value
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
-100 % to 100 % (AVERage: 0% to 100 %, SDEViation: 0 % to 50 %)
Default unit: 
%
<6_PhErrorRMS>
Phase error RMS value
Range: 
0 deg  to  180 deg
Default unit: 
deg
<7_PhErrorPeak>
Phase error peak value
Range: 
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg)
Default unit: 
deg
<8_IQoffset>
I/Q origin offset
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<9_IQimbalance>
I/Q imbalance
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<10_CarrFreqErr>
Carrier frequency error
Range: 
-60000 Hz  to  60000 Hz
Default unit: 
Hz
<11_TransTimeErr>
Transmit time error
Range: 
-250 chips  to  250 chips
Default unit: 
chip
<12_UEpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<13_PowerSteps>
User equipment power step
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<14_PhaseDisc>
Phase discontinuity
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<15_TxTimeAlign>
Time difference between the two UL carriers
Range: 
-150 chips  to  100 chips
Default unit: 
chip
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.2.60: command renamed (
CARRier<c>
 added)
V3.2.70: added <15_TxTimeAlign>
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top