# CONFigureLTEMEASiENBMEValuationSCOuntSPECtrumACLR

Module: LTE eNodeB Measurements
Source: b596ed722a52411c.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:SCOunt:SPECtrum:ACLR
CONFigure:LTE:MEAS<i>:ENB:MEValuation:SCOunt:SPECtrum:ACLR 
<StatisticCount>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:SCOunt:SPECtrum:SEMask 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Separate statistic counts for ACLR and spectrum emission mask measurements are supported.
Parameters:
<StatisticCount>
Range: 
1 subframe  to  1000 subframes
*RST:
10 subframes
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.0.20
Top