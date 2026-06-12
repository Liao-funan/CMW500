# FETChLTEMEASiMEValuationACLRCURRent

Module: LTE Measurements
Source: 8ea02ba723404bfb.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
ACLR Spectrum Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:ACLR:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:ACLR:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:ACLR:AVERage? 
READ:LTE:MEAS<i>:MEValuation:ACLR:CURRent? 
READ:LTE:MEAS<i>:MEValuation:ACLR:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:ACLR:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:ACLR:AVERage? 
Returns the relative ACLR values as displayed in the table below the ACLR diagram. The current and average values can be retrieved.
See also 
"View Spectrum ACLR"
.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_UTRA2neg> <3_UTRA1neg>
ACLR for the second and first adjacent UTRA channels with lower frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<4_EUTRAneg>
ACLR for the first adjacent E-UTRA channel with lower frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<5_EUTRA>
Power in the allocated E-UTRA channel
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<6_EUTRApos>
ACLR for the first adjacent E-UTRA channel with higher frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<7_UTRA1pos> <8_UTRA2pos>
ACLR for the first and second adjacent UTRA channels with higher frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
Top