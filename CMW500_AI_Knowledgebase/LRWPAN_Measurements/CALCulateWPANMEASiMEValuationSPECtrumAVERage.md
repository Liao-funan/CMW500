# CALCulateWPANMEASiMEValuationSPECtrumAVERage

Module: LRWPAN Measurements
Source: 62526da595d04e01.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Spectrum Measurement Results
 > 
CALCulate:WPAN:MEAS<i>:MEValuation:SPECtrum:AVERage?
CALCulate:WPAN:MEAS<i>:MEValuation:SPECtrum:AVERage? 
FETCh:WPAN:MEAS<i>:MEValuation:SPECtrum:AVERage? 
READ:WPAN:MEAS<i>:MEValuation:SPECtrum:AVERage? 
Returns the average spectrum single results.
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
<2_BurstOutOfTol>
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
SPECtrum
) exceeding the specified limits, see 
"Spectrum Requirements"
.
Additional parameters: OFF | ON (disables | enables this check)
Range: 
0 %  to  100 %
<3_AveragePower>
Average burst power
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<4_RBWPower>
Output power of the DUT within the channel central frequency ±1 MHz using 100 kHz resolution bandwidth
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<5_Margin1>... <7_Margin3>
Three margins (three worst values) between power spectral density trace and spectrum limit line for relative frequencies f < 0 (lesser than the frequency of central channel). A negative result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Range: 
-99.99 dBW  to  99.99 dBW
Default unit: 
dBW
<8_Margin4>... <10_Margin6>
Three margins (three worst values) between power spectral density trace and spectrum limit line for relative frequencies f > 0 (greater than the frequency of central channel). A negative result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Range: 
-99.99 dBW  to  99.99 dBW
Default unit: 
dBW
<11_Signal_Level1>... <16_Signal_Level6>
Level of received signal measured in margin points 1 to 6.
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<17_Frequency1>... <22_Frequency6>
Frequency offsets between the margin points 1 to 6 and the channel center frequency.
Range: 
-9999 MHz  to  9999 MHz
Default unit: 
Hz
Example: 
See 
"Spectrum Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
V3.5.20: added margin, signal level and frequency results
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top