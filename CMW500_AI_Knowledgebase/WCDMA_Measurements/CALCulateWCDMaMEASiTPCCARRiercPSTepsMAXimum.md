# CALCulateWCDMaMEASiTPCCARRiercPSTepsMAXimum

Module: WCDMA Measurements
Source: c696a95235df4a9c.htm

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
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:MAXimum?
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:MAXimum? 
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:MINimum? 
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:AVERage? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:MAXimum? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:MINimum? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:AVERage? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:MAXimum? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:MINimum? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:PSTeps:AVERage? 
Return the power step and power step group single value results per carrier. The minimum, maximum and average results can be retrieved.
The command returns all parameters listed below, independent of the selected TPC setup. However, only for some of the parameters measured values are available. For the other parameters, only an indicator is returned (e.g. NAV).
"Step A" to "step H" refer to the test steps of the "Inner Loop Power Control" mode (results <2_Step0dB_ABC> to <14_StartFH> and <22_EPStepsB1dB> to <25_EPStepsFH>).
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
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
-50 dB  to  50 dB
Default unit: 
dB
<3_Step1dB_B>
Power step, expected +1 dB, test step B
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<4_StepM1dB_C>
Power step, expected -1 dB, test step C
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<5_Group0dB_A>
Power step group, expected 0 dB, test step A
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<6_Group10dB_B>
Power step group, expected +10 dB, test step B
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<7_GroupM10dB_C>
Power step group, expected -10 dB, test step C
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<8_Start0dB_A>
First slot of the group where the result <5_Group0dB_A> has been measured
Range: 
1  to  51
<9_StepEG>
Power step, expected -1 dB in step E / -2 dB in step G
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<10_StepFH>
Power step, expected +1 dB in step F / +2 dB in step H
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<11_GroupEG>
Power step group, expected -10 dB in step E / -20 dB in step G
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<12_GroupFH>
Power step group, expected +10 dB in step F / +20 dB in step H
Range: 
-50 dB  to  50 dB
Default unit: 
dB
<13_StartEG>
First slot of the group where the result <11_GroupEG> has been measured
Range: 
1  to  161
<14_StartFH>
First slot of the group where the result <12_GroupFH> has been measured
Range: 
1  to  161
<15_StepsUp>
Power steps up result of "Change of TFC" mode
Range: 
-25 dB  to  25 dB
Default unit: 
dB
<16_StepsDown>
Power steps down result of "Change of TFC" mode
Range: 
-25 dB  to  25 dB
Default unit: 
dB
<17_InitStep>
Initial power step P
0
 result of "UL Compressed Mode"
<18_RSteps>
Recovery power steps result of "UL Compressed Mode" - pattern A.
<19_RGroup>
Recovery power steps group (P
1
 to P
7
) result of "UL Compressed Mode" - pattern A.
<20_StepnCMCM>
NonCM-CM power steps result of "UL Compressed Mode" - pattern B.
<21_StepCMnCM>
CM-nonCM power steps result of "UL Compressed Mode" - pattern B.
<22_EStep1dB_B>
Exceptional power step, expected +1 dB, test step B
<23_EStepM1dB_C
Exceptional power step, expected -1 dB, test step C
<24_EStepEG>
Exceptional power step, expected -1 dB in step E / -2 dB in step G
<25_EStepFH>
Exceptional power step, expected +1 dB in step F / +2 dB in step H
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.0.20: added 
CALCulate
 commands
V3.0.30: added results <15_StepsUp> and <16_StepsDown>
V3.2.60: added results <17_InitStep>, <18_RSteps>, <19_RGroup>, <20_StepnCMCM>, and <21_StepCMnCM>
V3.2.70: command renamed (
CARRier<c>
 added)
V3.7.10: added results <22_EStep1dB_B>, <23_EStepM1dB_C>, <24_EStepEG>, <25_EStepFH>
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top