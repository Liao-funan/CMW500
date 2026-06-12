# General Examples

Module: WCDMA Measurements
Source: 7eb3b41753474c90.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
General Examples
The WCDMA multi-evaluation measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...WCDMa:MEAS:MEValuation...
Use general commands of the type 
...:WCDMa:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
Use general commands of the type 
...:WCDMa:MEAS:UESignal...
 (no 
:MEValuation
 mnemonic) to inform the R&S
 
CMW about the basic properties of the measured WCDMA signal.
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:MEAS:MEValuation...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:MEAS:MEValuation
 and retrieve the results using 
FETCh:WCDMa:MEAS:MEValuation...?
.
For synchronization and proper decoding, some UE signal settings must be in accordance with the measured signal; see 
"Specifying Required Settings"
.
Contents
Specifying General Measurement Settings
Specifying Required Settings
Configuring Measurement-Specific Settings
Configuring the Trigger System
Specifying Limits
Performing Single-Shot Measurements
Single-Shot and Continuous Measurements
Top