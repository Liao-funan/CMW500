# SOURceGPRFGENiARBSCOunt

Module: GPRF Generator
Source: df86df9525af4d5f.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Trigger and Multi-Segment Settings
 > 
SOURce:GPRF:GEN<i>:ARB:SCOunt?
SOURce:GPRF:GEN<i>:ARB:SCOunt? 
Queries the progress of ARB file processing.
During ARB file processing, the command behavior depends on the instrument model as follows:
R&S
 
CMW100/CMW with MUA
As long as the ARB file is processed, the command returns 
0,0,0
. In continuous mode, the command always returns 
0,0,0
.
You can use the command to check in single-shot mode whether ARB file processing is complete.
R&S
 
CMW500/2xx with BB Meas
As long as the ARB file is processed, the command evaluates the position of the currently processed sample within the ARB file and returns corresponding results. The remote query takes between 2 ms and 3 ms, which introduces an uncertainty to the results.
You can use the command to check the progress in single-shot mode and in continuous mode.
If ARB file processing is complete, the command returns results for the previous ARB file processing.
Return values: 
<CountTime>
Time elapsed since the start of the first cycle
If ARB file processing is stopped / completed, the counter stops.
Default unit: 
s
<Cycles>
Number of complete cycles
A cycle ends when the waveform file is restarted from the beginning.
<SamplesCurrent>
Number of processed samples in the current / last cycle
Usage: 
Query only
Firmware/Software: 
V2.0.10
Top