# CONFigureLTEMEASiMEValuationSCOuntSPECtrumACLR

Module: LTE Measurements
Source: cec80e63d08441d7.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:SCOunt:SPECtrum:ACLR
CONFigure:LTE:MEAS<i>:MEValuation:SCOunt:SPECtrum:ACLR 
<StatisticCount>
CONFigure:LTE:MEAS<i>:MEValuation:SCOunt:SPECtrum:SEMask 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Separate statistic counts for ACLR and spectrum emission mask measurements are supported.
Parameters:
<StatisticCount>
Number of measurement intervals (slots)
Range: 
1 slot  to  1000 slots
*RST:
20 slots
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Emission Mask / ACLR > Statistic Count"
Top