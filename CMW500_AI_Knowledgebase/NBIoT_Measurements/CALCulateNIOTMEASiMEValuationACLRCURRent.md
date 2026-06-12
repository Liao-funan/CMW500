# CALCulateNIOTMEASiMEValuationACLRCURRent

Module: NBIoT Measurements
Source: e2996e86987543cf.htm

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
CALCulate:NIOT:MEAS<i>:MEValuation:ACLR:CURRent?
CALCulate:NIOT:MEAS<i>:MEValuation:ACLR:CURRent? 
CALCulate:NIOT:MEAS<i>:MEValuation:ACLR:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:ACLR:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:ACLR:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:ACLR:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:ACLR:AVERage? 
Returns the relative ACLR values as displayed in the table below the ACLR diagram. The current and average values can be retrieved.
See also 
"View Spectrum ACLR"
.
Return values: 
<Reliability>
"Reliability Indicator"
<UTRAneg>
ACLR for the adjacent UTRA channel with lower frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<GSMneg>
ACLR for the adjacent GSM channel with lower frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<NBNIOT>
Power in the allocated NB-IOT channel
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<GSMpos>
ACLR for the adjacent GSM channel with higher frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<UTRApos>
ACLR for the adjacent UTRA channel with higher frequency
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
V3.5.10
Top