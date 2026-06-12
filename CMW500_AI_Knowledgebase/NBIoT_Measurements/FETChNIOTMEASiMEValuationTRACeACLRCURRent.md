# FETChNIOTMEASiMEValuationTRACeACLRCURRent

Module: NBIoT Measurements
Source: 30c1151347fe450e.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
ACLR Spectrum Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:ACLR:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:ACLR:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:ACLR:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:ACLR:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:ACLR:AVERage? 
Returns the absolute powers as displayed in the ACLR diagram. The current and average values can be retrieved. See also 
"View Spectrum ACLR"
.
Return values: 
<Reliability>
"Reliability Indicator"
<UTRAneg>
Power in the adjacent UTRA channel with lower frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<GSMneg>
Power in the adjacent GSM channel with lower frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<NBNIOT>
Power in the allocated NB-IOT channel
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<GSMpos>
Power in the adjacent GSM channel with higher frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<UTRApos>
Power in the adjacent UTRA channel with higher frequency
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