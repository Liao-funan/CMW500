# FETChWLANMEASiMEValuationMODulationCMIMoCURRent

Module: WLAN Measurements
Source: 015c014a82534160.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Single Values, OFDM
 > 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:SDEViation? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:SDEViation? 
Return the current, average, maximum and standard deviation single value results for composite MIMO measurements.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_MCSIndex>
Modulation and coding scheme index
Range: 
0  to  76
<3_NoOfSS> <4_NoOfSTS>
Number of spatial streams and space-time streams
Range: 
1  to  4
<5_PayloadLength>
Number of OFDM symbols in the payload of the measured burst
Range: 
16 symbols  to  1366 symbols
Default unit: 
symbol
<6_EVMAllCarr> <7_EVMDataCarr> <8_EVMPilotCarr>
Error vector magnitude for all subcarriers, data subcarriers and pilot subcarriers
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<9_PowerRMS> <10_PowerPeak>
RMS and peak power of the measured burst
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<11_PowerSTS1> ... <14_PowerSTS4>
RMS power for the space-time streams 1 to 4
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<15_FreqError>
Center frequency error
Range: 
-150E+6 Hz  to  150E+6 Hz
Default unit: 
Hz
<16_OutOfTol>
Out of tolerance result
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements (OFDM, CMIMO)"
Usage: 
Query only
Firmware/Software: 
V2.1.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top