# FETChLTEMEASiENBMEValuationTRACeACLRCURRent

Module: LTE eNodeB Measurements
Source: 6bfa0d2b2fec46c7.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
ACLR Spectrum Results
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:ACLR:CURRent?
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:ACLR:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:ACLR:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:ACLR:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:ACLR:AVERage? 
Returns the absolute powers as displayed in the ACLR diagram. The current and average values can be retrieved.
See also 
"View ACLR"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_U768_2neg> <3_U768_1neg>
Power in the second and first adjacent UTRA 7.68 MHz channels below the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<4_U384_2neg> <5_U384_1neg>
Power in the second and first adjacent UTRA 3.84 MHz channels below the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<6_U128_2neg> <7_U128_1neg>
Power in the second and first adjacent UTRA 1.28 MHz channels below the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<8_EUTRA2neg> <9_EUTRA1neg>
Power in the second and first adjacent E-UTRA channels below the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<10_EUTRA>
Power in the assigned E-UTRA channel
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<11_EUTRA1pos> <12_EUTRA2pos>
Power in the first and second adjacent E-UTRA channels above the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<13_U128_1pos> <14_U128_2pos>
Power in the first and second adjacent UTRA 1.28 MHz channels above the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<15_U384_1pos> <16_U384_2pos>
Power in the first and second adjacent UTRA 3.84 MHz channels above the carrier frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<17_U768_1pos> <18_U768_2pos>
Power in the first and second adjacent UTRA 7.68 MHz channels above the carrier frequency
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
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top