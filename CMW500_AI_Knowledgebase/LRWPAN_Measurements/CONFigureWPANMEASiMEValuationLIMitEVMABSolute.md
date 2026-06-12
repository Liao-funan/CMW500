# CONFigureWPANMEASiMEValuationLIMitEVMABSolute

Module: LRWPAN Measurements
Source: 4970a9e5939c42a1.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Limit Settings
 > 
CONFigure:WPAN:MEAS<i>:MEValuation:LIMit:EVM:ABSolute
CONFigure:WPAN:MEAS<i>:MEValuation:LIMit:EVM:ABSolute 
<RMS_EVM>, <PeakEVM>, <RMS_EVMEnabled>, <PeakEVM_Enabled>[, <RMS_SHRPHR>, <Peak_SHRPHR>, <RMS_Overall>, <Peak_Overall>, <RMS_SHRPHR_Enb>, <Pk_SHRPHR_Enb>, <RMSOverall_Enb>, <PkOverall_Enb>]
Defines upper limits for the RMS and peak values of the absolute error vector magnitude (EVM).
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Parameters:
<1_RMS_EVM_PS> <2_Peak_EVM_PS>
EVM for PSDU portion
Range: 
0 %  to  100 %
*RST:
35 %
<3_RMS_PS_Enb> <4_Peak_PS_Enb>
OFF |
 
 ON
Disables | enables the limit check for EVM within PSDU portion
*RST:
ON for RMS limits, OFF for peak limits
<5_RMS_EVM_SP> <6_Peak_EVM_SP>
EVM for SHR + PHR portion
Range: 
0 %  to  100 %
*RST:
35 %
<7_RMS_EVM_PP> <8_Peak_EVM_PP>
Overall EVM for complete PPDU
Range: 
0 %  to  100 %
*RST:
35 %
<9_RMS_SP_Enb> <10_Peak_SP_Enb>
OFF |
 
 ON
Disables | enables the limit check for EVM within SHR + PHR portion
*RST:
ON for RMS limits, OFF for peak limits
<11_RMS_PP_Enb> <12_Peak_PP_Enb>
OFF |
 
 ON
Disables | enables the limit check for overall EVM for complete PPDU
*RST:
ON for RMS limits, OFF for peak limits
Example: 
See 
"Limit Settings"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Modulation Limits"
Top