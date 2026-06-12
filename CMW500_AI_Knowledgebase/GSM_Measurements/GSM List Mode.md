# GSM List Mode

Module: GSM Measurements
Source: 54cdba69b68a4708.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
GSM List Mode
GSM List Mode
The list mode for the GSM multi-evaluation measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...GSM:MEAS:MEValuation:LIST...
Use general commands of the type 
...:GSM:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off and list mode is disabled. Use 
CONFigure:GSM:MEAS:MEValuation:LIST ON
 to enable the list mode and 
INIT:GSM:MEAS:MEValuation
 to initiate a single-shot measurement.
Use 
FETCh:GSM:MEAS:MEValuation:LIST:SEGMent<Seg>:...?
 commands to retrieve the results.
Speed considerations
The following measurement settings have an impact on the measurement speed:
The number and size of the segments and the number of measured slots in each segment
The number and type of results that the R&S
 
CMW needs to calculate
See also remarks about "Configuration of segments and measurement" in section 
"List Mode Configuration"
.
Contents
Specifying Global Measurement Settings
Specifying List Mode Settings
Performing Single-Shot Measurements
Retrieving Single Results for All Segments
Top