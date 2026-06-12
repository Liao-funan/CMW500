# FETChLTEMEASiMEValuationTRACeACLRCURRent

Module: LTE Measurements
Source: 163132354fe540a7.htm

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
FETCh:LTE:MEAS<i>:MEValuation:TRACe:ACLR:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:ACLR:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:ACLR:AVERage? 
READ:LTE:MEAS<i>:MEValuation:TRACe:ACLR:CURRent? 
READ:LTE:MEAS<i>:MEValuation:TRACe:ACLR:AVERage? 
Returns the absolute powers as displayed in the ACLR diagram. The current and average values can be retrieved. See also 
"View Spectrum ACLR"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_UTRA2neg> <3_UTRA1neg>
Power in the second and first adjacent UTRA channels with lower frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<4_EUTRAneg>
Power in the first adjacent E-UTRA channel with lower frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<5_EUTRA>
Power in the allocated E-UTRA channel
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<6_EUTRApos>
Power in the first adjacent E-UTRA channel with higher frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<7_UTRA1pos> <8_UTRA2pos>
Power in the first and second adjacent UTRA channels with higher frequency
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
V1.0.10.1
Top