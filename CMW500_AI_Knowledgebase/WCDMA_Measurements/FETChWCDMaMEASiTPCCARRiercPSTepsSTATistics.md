# FETChWCDMaMEASiTPCCARRiercPSTepsSTATistics

Module: WCDMA Measurements
Source: 993c36a25ff448a4.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:STATistics?
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:STATistics? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:STATistics? 
Return the "Statistics" values per carrier, indicating how many trace values have been considered to derive the maximum, minimum and average power step and power step group results.
The command returns all parameters listed below, independent of the selected TPC setup. However, only for some of the parameters result values are available. For the other parameters, only an indicator is returned (e.g. NAV).
"Step A" to "step H" refer to the test steps of the "Inner Loop Power Control" mode (results <2_Step0dB_ABC> to <9_GroupFH> and <13_EPStepsB1dB> to <16_EPStepsFH>).
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_Step0dB_ABC>
Power step, expected 0 dB, test steps A, B, C
Range: 
140 (fixed value)
<3_Step1dB_B>
Power step, expected +1 dB, test step B
Range: 
10 (fixed value)
<4_StepM1dB_C>
Power step, expected -1 dB, test step C
Range: 
10 (fixed value)
<5_Group0dB_A>
Power step group, expected 0 dB, test step A
Range: 
51 (fixed value)
<6_StepEG>
Power step, expected -1 dB in step E / -2 dB in step G
Range: 
0  to  170
<7_StepFH>
Power step, expected +1 dB in step F / +2 dB in step H
Range: 
0  to  170
<8_GroupEG>
Power step group, expected -10 dB in step E / -20 dB in step G
Range: 
0  to  161
<9_GroupFH>
Power step group, expected +10 dB in step F / +20 dB in step H
Range: 
0  to  161
<10_PwrStepsUp>
Power steps up result of "Change of TFC" mode
Range: 
0  to  5
<11_PwrStepsDown>
Power steps down result of "Change of TFC" mode
Range: 
0  to  5
<12_RPwrSteps>
Recovery power steps result of "UL Compressed Mode" - pattern A
<13_EStep1dB_B>
Exceptional power stes, expected +1 dB, test step B
<14_EStepM1dB_C
Exceptional power step, expected -1 dB, test step C
<15_EStepEG>
Exceptional power step, expected -1 dB in step E / -2 dB in step G
<16_EStepFH>
Exceptional power step, expected +1 dB in step F / +2 dB in step H
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.0.30: added results <10_PwrStepsUp> and <11_PwrStepsDown>
V3.2.60: added results <12_RPwrSteps> and <11_PwrStepsDown>
V3.2.70: command renamed (
CARRier<c>
 added)
V3.7.10: added results <13_EStep1dB_B>, <14_EStepM1dB_C, <15_EStepEG>, <16_EStepFH>
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top