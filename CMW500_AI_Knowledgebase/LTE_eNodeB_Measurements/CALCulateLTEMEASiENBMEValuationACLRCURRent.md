# CALCulateLTEMEASiENBMEValuationACLRCURRent

Module: LTE eNodeB Measurements
Source: bfde40dcd66e4f18.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
ACLR Spectrum Results
 > 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:ACLR:CURRent?
CALCulate:LTE:MEAS<i>:ENB:MEValuation:ACLR:CURRent? 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:ACLR:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:ACLR:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:ACLR:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:ACLR:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:ACLR:AVERage? 
Returns the relative ACLR values as displayed in the table below the ACLR diagram. The current and average values can be retrieved.
See also 
"View ACLR"
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
<2_U768_2neg> <3_U768_1neg>
ACLR for the second and first adjacent UTRA 7.68 MHz channels below the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<4_U384_2neg> <5_U384_1neg>
ACLR for the second and first adjacent UTRA 3.84 MHz channels below the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<6_U128_2neg> <7_U128_1neg>
ACLR for the second and first adjacent UTRA 1.28 MHz channels below the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<8_EUTRA2neg> <9_EUTRA1neg>
ACLR for the second and first adjacent E-UTRA channels below the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<10_EUTRA>
Power in the assigned E-UTRA channel
Range: 
0 dB  to  100 dB
Default unit: 
dB
<11_EUTRA1pos> <12_EUTRA2pos>
ACLR for the first and second adjacent E-UTRA channels above the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<13_U128_1pos> <14_U128_2pos>
ACLR for the first and second adjacent UTRA 1.28 MHz channels above the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<15_U384_1pos> <16_U384_2pos>
ACLR for the first and second adjacent UTRA 3.84 MHz channels above the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<17_U768_1pos> <18_U768_2pos>
ACLR for the first and second adjacent UTRA 7.68 MHz channels above the carrier frequency
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
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top