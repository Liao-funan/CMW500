# Measurements with Standalone Scenario

Module: WCDMA Measurements
Source: de5a796f41504f67.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Programming
 > 
Measurements with Standalone Scenario
Measurements with Standalone Scenario
The following sections provide programming examples for the WCDMA TPC measurement, using the standalone scenario. The GPRF generator with an appropriate ARB file is used to send TPC commands to the UE. The main focus is on measurement mode "Inner Loop Power Control".
The WCDMA TPC measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...WCDMa:MEAS:TPC...
Use general commands of the type 
...WCDMa:MEAS...
 (no 
:TPC
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:MEAS:TPC...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:MEAS:TPC
 and retrieve the results using 
FETCh:WCDMa:MEAS:TPC...?
.
Contents
Specifying General Measurement Settings
Configuring Measurement-Specific Settings
Configuring the Trigger System
Specifying Limits
Configuring the GPRF Generator
Performing Measurements
Top