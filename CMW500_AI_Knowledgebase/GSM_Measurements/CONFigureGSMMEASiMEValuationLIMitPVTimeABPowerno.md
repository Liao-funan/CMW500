# CONFigureGSMMEASiMEValuationLIMitPVTimeABPowerno

Module: GSM Measurements
Source: 8c5a9576c7554736.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Power vs. Time)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:PVTime:ABPower<no>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:PVTime:ABPower<no> 
<StartPCL>, <EndPCL>, <LowerLimit>, <UpperLimit>, <Enable>
Defines and activates limits for the average burst power, i.e. tolerances for ranges of template power control levels (TPCLs).
Suffix: 
<no>
1..10
Number of the group
Parameters:
<StartPCL>
Number of first TPCL to which the limits are applied
Range: 
0  to  31
*RST:
See table below
<EndPCL>
Number of last TPCL to which the limits are applied
Range: 
0  to  31
*RST:
See table below
<LowerLimit>
Range: 
-10 dB  to  0 dB
*RST:
See table below
<UpperLimit>
Range: 
0 dB  to  10 dB
*RST:
See table below
<Enable>
OFF |
 
 ON
ON:
 Enable limits for the given 
<no>
OFF:
 Disable limits for the given 
<no>
*RST:
See table below
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Avg. Burst Power"
The default settings for GSM 900/1800/1900 are according to the following table. The default settings for GSM850, GSM GT800, and GSM400 are identical to GSM900.
 
<Enable>
<StartPCL>
<EndPCL>
<LowerLimit> in dB
<UpperLimit> in dB
<no>=1
ON
5/0/0
5/0/0
-2
2
<no>=2
ON
0
2/8/8
-2/-3/-3
2/3/3
<no>=3
ON
3/9/9
15/13/13
-3/-4/-4
3/4/4
<no>=4
ON
16/14/14
31/28/15
-5
5
<no>=5
OFF/ON/ON
-/29/30
-/29/31
-/-2/-2
-/2/2
<no>=6
OFF/ON/OFF
-/30/-
-/31/-
-/-3/-
-/3/-
<no>=7 to 10
OFF
-
-
-
-
Top