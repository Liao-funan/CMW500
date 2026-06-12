# CALCulateWCDMaMEASiNBMEValuationSPECtrumCURRent

Module: WCDMA NodeB Measurements
Source: a11262cfc78945b4.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Results
 > 
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:CURRent?
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:CURRent? 
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:AVERage? 
CALCulate:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:SPECtrum:MAXimum? 
Returns the ACLR power and spectrum emission single value results of the multi-evaluation measurement. The current, average and maximum values can be retrieved.
See also 
"Detailed Views: ACLR"
 and 
"Detailed Views: Spectrum Emission Mask"
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
<2_CPICHpower>
Power of CPICH
Range: 
-100 dBm  to  100 dBm
<3_CarrierPower>
Power at the nominal carrier frequency (DL frequency)
Range: 
-90 dBm  to  0 dBm
<4_ACLRminus2> <5_ACLRminus1> <6_ACLRplus1> <7_ACLRplus2>
Power of the adjacent channels (±1st adjacent channels at ±5 MHz from the DL frequency, ±2nd adjacent channels at ±10 MHz from the DL frequency)
Range: 
-90 dBm  to  0 dBm
Default unit: 
dBm
<8_OBW>
Occupied bandwidth
Range: 
-20E+6 Hz  to  20E+6 Hz
Default unit: 
Hz
<9_MarginAB> <10_MarginCD> <11_MarginEF> <12_MarginGH> <13_MarginIJ> <14_MarginJI> <15_MarginHG> <16_MarginFE> <17_MarginDC> <18_MarginBA>
Margin between 1 MHz trace and limit line in the 10 emission mask areas. A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Range: 
-150 dB  to  150 dB
Default unit: 
dB
<19_FreqAB> <20_FreqCD> <21_FreqEF> <22_FreqGH> <23_FreqIJ> <24_FreqJI> <25_FreqHG> <26_FreqFE> <27_FreqDC> <28_FreqBA>
Frequency offsets between the margin points and the center frequency in the 10 emission mask areas.
Range: 
-12500 kHz to 12500 kHz
Default unit: 
Hz
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