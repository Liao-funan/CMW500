# CONFigureNIOTMEASiMEValuationSCOuntSPECtrumSEMask

Module: NBIoT Measurements
Source: 430b1a21ebf342bd.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control Parameters
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:SCOunt:SPECtrum:SEMask
CONFigure:NIOT:MEAS<i>:MEValuation:SCOunt:SPECtrum:SEMask 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
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
V3.5.10
Manual operation: 
See 
"Statistic Count"
Top