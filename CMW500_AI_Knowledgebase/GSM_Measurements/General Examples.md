# General Examples

Module: GSM Measurements
Source: bc44393fa6ad4d3e.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
General Examples
General Examples
The GSM multi-evaluation measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...GSM:MEAS:MEValuation...
Use general commands of the type 
...:GSM:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:GSM:MEAS:MEValuation?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:GSM:MEAS:MEValuation
 and retrieve the results using 
FETCh:GSM:MEAS:MEValuation...?
.
Speed considerations
The following measurement settings provide additional results but can slow down the measurement:
Evaluation of the spectrum vs. time measurements
Evaluation of the "AM-PM" delay for polar modulators
Access burst search
Contents
Specifying General Measurement Settings
Specifying Measurement-Specific Settings
Performing Single-Shot Measurements
Single-Shot and Continuous Measurements
Configuring a Spectrum Measurement
Selecting Specific Burst Types
Top