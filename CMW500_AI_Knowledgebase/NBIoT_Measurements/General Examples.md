# General Examples

Module: NBIoT Measurements
Source: 2bfecc2d22d4407b.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
General Examples
The NB-IoT multi-evaluation measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...NIOT:MEAS:MEValuation...
Use general commands of the type 
...:NIOT:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:NIOT:MEAS:MEValuation...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:NIOT:MEAS:MEValuation
 and retrieve the results using 
FETCh:NIOT:MEAS:MEValuation...?
.
For synchronization and proper decoding, some UE signal settings must be in accordance with the measured signal; see 
"Specifying Required Settings"
.
Contents
Specifying General and Common Measurement Settings
Specifying Required Settings
Specifying Measurement-Specific Settings
Configuring the Trigger System
Specifying Limits
Performing Single-Shot Measurements
Single-Shot and Continuous Measurements
Top