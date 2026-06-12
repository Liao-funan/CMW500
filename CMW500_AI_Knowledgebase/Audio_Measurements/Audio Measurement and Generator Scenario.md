# Audio Measurement and Generator Scenario

Module: Audio Measurements
Source: fa88647d34524b09.htm

## 原始指令文档说明
Audio Measurements
 > 
Programming
 > 
Audio Measurement and Generator Scenario
Audio Measurement and Generator Scenario
This section provides examples for single tone, multitone and FFT noise measurements with the audio measurement and generator scenario.
The audio generators are programmed as follows:
The generators are controlled by SCPI commands with the following syntax:
–
Analog generator: 
...AUDio:GEN:ANALog...
–
Digital generator: 
...AUDio:GEN:DIGital...
After a 
*RST
, the generator is switched off.
To switch it on, use 
SOURce:WCDMa:GEN:STATe ON
 . 
*OPC?
 ensures that the generator signal is available before the next command line is executed.
The audio measurements are programmed as follows:
The measurements are controlled by SCPI commands with the following syntax:
–
Analog measurements: 
...AUDio:MEAS:ANALog...
–
Digital measurements: 
...AUDio:MEAS:DIGital...
After a 
*RST
, the measurements are switched off.
Use 
READ:AUDio:MEAS:ANALog/DIGital:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:AUDio:MEAS:ANALog/DIGital
 and retrieve the results using 
FETCh:AUDio:MEAS:ANALog/DIGital:...?
.
The command sets of the analog and digital audio applications are similar. The following examples list commands of the analog generator and measurement.
Contents
Reset and Scenario Selection
General Measurement Settings
Single Tone Measurement
Multitone Measurement
FFT Noise Measurement
Top