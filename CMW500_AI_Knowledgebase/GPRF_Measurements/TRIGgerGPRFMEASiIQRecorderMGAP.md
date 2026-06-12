# TRIGgerGPRFMEASiIQRecorderMGAP

Module: GPRF Measurements
Source: 6012f76caef94260.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
Trigger Settings
 > 
TRIGger:GPRF:MEAS<i>:IQRecorder:MGAP
TRIGger:GPRF:MEAS<i>:IQRecorder:MGAP 
<MinimumGap>
Sets a minimum time during which the IF signal must be below the trigger threshold before the trigger is armed so that an IF power trigger event can be generated.
The I/Q recorder measurement is always performed in single-shot mode. Therefore it is controlled by a single trigger event. As a consequence, the minimum trigger gap condition is valid between the start of the measurement and the first trigger event only.
For continuous or retriggered measurements, the gap condition can be applied repeatedly.
Parameters:
<MinimumGap>
Range: 
0 s  to  0.01 s
*RST:
0 s
Default unit: 
s
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Minimum Trigger Gap"
Top